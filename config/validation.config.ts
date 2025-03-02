import { REGEX_CONFIG } from "./regex.config"
import {postcodeValidator} from "postcode-validator";

export const VALIDATION_CONFIG = {
    required: "Field is required",
    minLength: {
        value: 1,
        message: "Field must have at least 1 character",
    },
    maxLength: {
        value: 300,
        message: "Field must have maximum 300 characters",
    },
    maxLengthShortText: {
        value: 140,
        message: "Field must have maximum 140 characters",
    },
    maxLengthTest: {
        value: 5000,
        message: "Field must have maximum 5000 characters",
    },
    minLengthPassword: {
        value: 8,
        message: "Password must have at least 8 characters",
    },
    maxLengthPassword: {
        value: 30,
        message: "Password must have maximum 30 characters",
    },
    email: {
        value: REGEX_CONFIG.email,
        message: "Field must be a valid email",
    },
    zip: {
        value: REGEX_CONFIG.zip,
        message: "Field must be a valid zip",
    },
    notJustSpaces: {
        value: REGEX_CONFIG.notJustSpaces,
        message: "Field must not be a only spaces",
    },

    postCode: (data: string): boolean | string => {
        const code = data.replace(/\s/g, "");
        const isValid =  postcodeValidator(code, 'UK');
        return (
            !code ||
            isValid ||
            "Please enter a valid PostalCode"
        )
    },
    username: {
        value: REGEX_CONFIG.username,
        message:
            "Username must be from 4 to 100 characters long and can contain only numbers, letters and these symbols: `-`, `_`, `.`",
    },

    minAmount: {
        value: 1,
        message: "Minimum amount is $1",
    },
    code: {
        value: REGEX_CONFIG.code,
        message: "Code must be 6 Digit",
    },
}
