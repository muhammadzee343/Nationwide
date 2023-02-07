import React, { useMemo } from "react";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";

import "../styles/strip.module.css";

const useOptions = () => {

    const options = useMemo(
        () => ({
            style: {
                base: {
                    color: "#32325d",
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: "antialiased",
                    fontSize:27,
                    "::placeholder": {
                        color: "#aab7c4",
                    },
                },
                invalid: {
                    color: "#fa755a",
                    iconColor: "#fa755a",
                },
            },
        }),
        []
    );

    return options;
};

const CardFormComponent = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    //@ts-ignore
    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make  sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardNumberElement);

        console.log(card, 'card')
        //@ts-ignore
        const result = await stripe.createToken(card);

        if (result.error) {
            // Show error to your customer.
            console.log(result.error.message);
        } else {
            console.log(result.token);
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            // stripeTokenHandler(result.token);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="pb-2 font-bold">Debit/Credit Card payment</p>
            <div className="w-full flex flex-col md:flex-row justify-between mb-3 space-x-3">
                <div className="w-full md:w-[45%]">
                    <label>
                        <p className="mb-1">Card Number</p>
                        <CardNumberElement
                            options={options}
                            onReady={() => {
                                console.log("CardElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardElement [focus]");
                            }}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                    </label>
                </div>
                <div className="w-full md:w-[25%]">
                    <label>
                        <p className="mb-1">Exp Date</p>
                        <CardExpiryElement
                            options={options}
                            onReady={() => {
                                console.log("CardElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardElement [focus]");
                            }}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                    </label>
                </div>
                <div className="w-full md:w-[25%]">
                    <label>
                        <p className="mb-1">CVC</p>
                        <CardCvcElement
                            options={options}
                            onReady={() => {
                                console.log("CardElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardElement [focus]");
                            }}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                    </label>
                </div>
            </div>
        </form>
    );
};

export default CardFormComponent;
