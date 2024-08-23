export default interface GroceryItem {
    picture_url: string;           
    name: string;                  
    description: string;         
    suggested_price: number; 
    actual_price: number;         
    discount_percentage: number;
}

export interface CheckoutForm {
    firstName: FormData;
    email: FormData;
    mobile: FormData;
    card: FormData;
    formValid: boolean
}

interface FormData{
    value: string;
    isValid: boolean
}