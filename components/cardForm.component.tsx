import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElement,
} from "@stripe/react-stripe-js";

import "../styles/strip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faCcVisa,
  faCcDiscover,
  faCcAmex,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import useResponsiveFontSizeHook from "../hooks/useResponsiveFontSize.hook";

const CARD_OPTIONS = {
  iconStyle: "solid" as const,
  style: {
    base: {
      iconColor: "#6772e5",
      color: "#6772e5",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#6772e5",
      },
    },
    invalid: {
      iconColor: "#ef2961",
      color: "#ef2961",
    },
  },
};

const useOptions = () => {
  const fontSize = useResponsiveFontSizeHook();

  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: fontSize,
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
    [fontSize]
  );

  return options;
};

const CardFormComponent = ({ stripObj, cardError, setCardError }: any) => {
  const stripe = useStripe();
  const elements = useElements();

  stripObj.stripe = stripe;
  stripObj.elements = elements;

  const options = useOptions();
  //@ts-ignore
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-row items-center justify-between mb-10">
        <p className="font-bold">Debit/Credit Card payment</p>
        <div className="flex flex-row gap-x-3">
          <FontAwesomeIcon
            className="text-yellow-500 w-10"
            icon={faCcMastercard}
          />
          <FontAwesomeIcon className="text-indigo-800 w-10" icon={faCcVisa} />
          <FontAwesomeIcon className="text-black w-10" icon={faCcDiscover} />
          <FontAwesomeIcon className="text-indigo-600 w-10" icon={faStripe} />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between mb-3 space-x-3">
        <div className="w-full">
          <CardElement
            options={options}
            onChange={(e) => {
              if (e.error) {
                // setPayment({ status: 'error' });
                // setErrorMessage(
                //     e.error.message ?? 'An unknown error occured'
                // );
                setCardError(e.error.message);
              } else {
                setCardError("");
              }
            }}
          />
          {cardError && (
            <p className="mt-1 text-sm text-red-600"> {cardError}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default CardFormComponent;
