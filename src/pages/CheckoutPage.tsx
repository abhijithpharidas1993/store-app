import { useState, useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GroceryItem, { CheckoutForm } from '../types'
import './CheckoutPage.css'
import reducer from '../Reducers/checkoutreducer'

const initialData: CheckoutForm = {
    firstName: {
        value: '',
        isValid: false
    },
    email: {
        value: '',
        isValid: false
    },
    mobile: {
        value: '',
        isValid: false
    },
    card: {
        value: '',
        isValid: false
    },
    formValid: false

}


const CheckoutPage = () => {
    const location = useLocation()
    const navigation = useNavigate()
    const [formData, dispatch] = useReducer(reducer, initialData)
    const [isSubmitted, setisSubmitted] = useState(false);
    const item = location.state?.item as GroceryItem
    
    
    const onSubmit = () => {
        setisSubmitted(true);
        if (formData.formValid) {
            navigation('/transaction-sucess', {
                state: {
                    trasactionId: Math.floor(Math.random() * 100000),
                    item: item
                }
            })
        }
    }
    return (
        <div className='checkout-page'>
            <h1>Checkout</h1>
            <div className='item-grid'>
                <div>Item</div>
                <div>{item.name}</div>
                <div>Price</div>
                <div>$ {item.actual_price}</div>
            </div>
            <div className='billing-info'>
                <label htmlFor="name">First Name</label>
                <input type="text" name='name'
                    value={formData?.firstName.value}
                    onChange={(e) => dispatch({ action: 'NAME_CHANGE', payload: e.target.value })}
                />
                {isSubmitted && !formData?.firstName.isValid ? <span>Invalid first name</span> : null}
                <label htmlFor="email"> Email</label>
                <input type="email" name='email'
                    value={formData?.email.value}
                    onChange={(e) => dispatch({ action: 'EMAIL_CHANGE', payload: e.target.value })}

                />
                {isSubmitted && !formData?.email.isValid ? <span>Invalid email</span> : null}

                <label htmlFor="mobile">Mobile</label>
                <input type="text" name='mobile'
                    value={formData?.mobile.value}
                    onChange={(e) => dispatch({ action: 'MOBILE_CHANGE', payload: e.target.value })}

                />
                {isSubmitted && !formData?.mobile.isValid ? <span>Invalid Mobile number</span> : null}

                <label htmlFor="card"> Credit card</label>
                <input type="text" name='card'
                    value={formData?.card.value}
                    onChange={(e) => dispatch({ action: 'CARD_CHANGE', payload: e.target.value })}

                />
                {isSubmitted && !formData?.card.isValid ? <span>Invalid card number</span> : null}
                <button onClick={onSubmit}>Checkout</button>
            </div>
        </div>
    )
}

export default CheckoutPage


