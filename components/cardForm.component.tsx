import React, { useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useResponsiveFontSizeHook from "../hooks/useResponsiveFontSize.hook";

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

        const card = elements.getElement(CardElement);
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
            <label>
                Credit or debit card
                <CardElement
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
                />
            </label>
        </form>
    );
};

export default CardFormComponent;
