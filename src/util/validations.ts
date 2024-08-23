export const nameValidator= (name: string)=> {
    const nameRegex = /^[a-zA-Z]/;
    return nameRegex.test(name)
}

export const emailValidator= (email: string)=> {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email)
}

export const mobileValidator= (mobile: string)=> {
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return mobileRegex.test(mobile)
}

export const cardValidator= (card: string)=> {

  const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  const amexpRegEx = /^(?:3[47][0-9]{13})$/;
  const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  let isValid = false;

  if (visaRegEx.test(card)) {
    isValid = true;
  } else if(mastercardRegEx.test(card)) {
    isValid = true;
  } else if(amexpRegEx.test(card)) {
    isValid = true;
  } else if(discovRegEx.test(card)) {
    isValid = true;
  }

  return isValid;
}