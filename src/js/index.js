window.submitForm = function submitForm(event) {
  event.preventDefault();

  const inputValue = event.target[0].value;
  const isValidEmailAddress = validateEmail(inputValue);

  const emailAddressForm = document.querySelector('#email-address-form');
  const emailAddressInput = document.querySelector('#email-address-input');
  const emailAddressControl = document.querySelector('#email-address-control');

  if (!isValidEmailAddress) {
    // create validation message
    let el = document.createElement('p');
    el.appendChild(document.createTextNode('Please provide an email address'));
    el.id = 'validation-message';
    el.classList.add('validation-error');

    const validationMessage = document.querySelector('#validation-message');
    if (!validationMessage) emailAddressForm.appendChild(el);

    // add error icon
    el = document.createElement('img');
    el.id = 'error-icon';
    el.classList.add('validation-error');
    el.setAttribute('src', "icon-error.svg");
    el.setAttribute('alt', 'Error Icon');

    const errorIcon = document.querySelector('#error-icon');
    if (!errorIcon) emailAddressInput.appendChild(el);

    // set the border of the input box
    emailAddressControl.classList.add('validation-error');
  } else {
    // remove validation message
    const validationMessage = document.querySelector('#validation-message');
    if (validationMessage) emailAddressForm.removeChild(validationMessage);

    // remove error icon
    const errorIcon = document.querySelector('#error-icon');
    if (errorIcon) emailAddressInput.removeChild(errorIcon);

    // remove error border
    emailAddressControl.classList.remove('validation-error');
  }
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))
    return true;

  return false;
}