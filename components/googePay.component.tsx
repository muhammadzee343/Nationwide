import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
let pr = null;
// @ts-ignore
const GoogePayComponent = ({ uuid, pricing, orderId }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  const router = useRouter();

  const placeOrder = async (data : object) => {

    // @ts-ignore
    const { paymentMethod:{billing_details} } = data

    const name = billing_details?.name.split(" ");

    const address = billing_details?.address;

    const body = {
      payment_detail: {
        billing_first_name: name[0],
        billing_last_name: name[1] ? name[1] : "",
        billing_address: address.line1,
        billing_city: address?.city,
        billing_state: "",
        billing_postcode: address?.postal_code,
        billing_phone: billing_details?.phone,
        billing_phone_2: "",
        billing_email: "",
        payment_method: "google_pay",
      },
      session_id: uuid,
    };

    let url = `${process.env.BASE_URL_DEV}orders/create_payment_intent`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();

      if (!response.ok) {
      } else {
        return result.client_secret;
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    if (stripe) {
      pr = stripe.paymentRequest({
        country: "US",
        currency: "gbp",
        total: {
          label: "Total Amount",
          amount: pricing.totalAmount * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });

      pr.on("paymentmethod", async (ev) => {
        // Confirm the PaymentIntent without handling potential next actions (yet).

        const clientSecret = await placeOrder(ev);

        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(
            clientSecret,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false }
          );

        if (confirmError) {
          // Report to the browser that the payment failed, prompting it to
          // re-show the payment interface, or show an error message and close
          // the payment interface.
          ev.complete("fail");
        } else {
          // Report to the browser that the confirmation was successful, prompting
          // it to close the browser payment method collection interface.
          ev.complete("success");

          router?.push({
            pathname: "/order-received",
            query: {
              order_id: orderId,
            },
          });
          // Check if the PaymentIntent requires any actions and if so let Stripe.js
          // handle the flow. If using an API version older than "2019-02-11"
          // instead check for: `paymentIntent.status === "requires_source_action"`.
          if (paymentIntent.status === "requires_action") {
            // Let Stripe.js handle the rest of the payment flow.
            const { error } = await stripe.confirmCardPayment(clientSecret);
            if (error) {
              // The payment failed -- ask your customer for a new payment method.
            } else {
              // The payment has succeeded.
            }
          } else {
            // The payment has succeeded.
          }
        }
      });
    }

    return () => {
      pr = null;
      setPaymentRequest(null);
    };
  }, [stripe, pricing.totalAmount,]);

  useEffect(() => {
    return () => {
      pr = null;
      setPaymentRequest(null);
    };
  }, []);


  useEffect(() => {
    paymentRequest?.canMakePayment().then((res)=>{
      if(res?.applePay || res.googlePay || res.link){
        setCanMakePayment(true);
      }
    });
  }, [paymentRequest]);


  const paymentbutton = useMemo(() => {

    if (paymentRequest && canMakePayment) {
      return (
        <>
          <PaymentRequestButtonElement options={{ paymentRequest }} />
          <div className="w-full text-center mt-3">
            <p className=" text-[15px] font-semibold">OR</p>
          </div>
        </>
      );
    } else {
      return null;
    }
  }, [paymentRequest, canMakePayment]);
  if (paymentRequest) {
    return paymentbutton;
  }

  // Use a traditional checkout form.
  return null;
};

export default GoogePayComponent;
