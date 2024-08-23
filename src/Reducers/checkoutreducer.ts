import { Reducer } from "react"
import { CheckoutForm } from "../types"
import { nameValidator, emailValidator, mobileValidator, cardValidator } from "../util/validations"

type ActionType = {
    action: string,
    payload: string
}

const reducer: Reducer<CheckoutForm, ActionType> = (state: CheckoutForm , action): CheckoutForm => {
    switch (action.action) {
        case 'NAME_CHANGE':
            return {
                ...state, firstName: {
                    value: action.payload,
                    isValid: nameValidator(action.payload)
                },
                formValid: nameValidator(action.payload) && state.card.isValid && state.email.isValid && state.mobile.isValid

            }
        case 'EMAIL_CHANGE':
            return {
                ...state, email: {
                    value: action.payload,
                    isValid: emailValidator(action.payload)
                },
                formValid: emailValidator(action.payload) && state.card.isValid && state.firstName.isValid && state.mobile.isValid

            }
        case 'MOBILE_CHANGE':
            return {
                ...state, mobile: {
                    value: action.payload,
                    isValid: mobileValidator(action.payload)
                },
                formValid: mobileValidator(action.payload) && state.card.isValid && state.email.isValid && state.firstName.isValid

            }
        case 'CARD_CHANGE':
            return {
                ...state, card: {
                    value: action.payload,
                    isValid: cardValidator(action.payload)
                },
                formValid: cardValidator(action.payload) && state.firstName.isValid && state.email.isValid && state.mobile.isValid

            }
        default:
            throw "unknon action"
    }
}

export default reducer