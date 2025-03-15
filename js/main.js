const $inputs = document.querySelectorAll('.input-field');
const $claimBtn = document.querySelector('.btn-submit');

let $errorLabel = 'cannot be empty';

document.addEventListener('click', e => {
  if (e.target.matches('.btn-submit')) {
    e.preventDefault();
    $inputs.forEach(el => !el.value ? showErrorMessage(el.getAttribute('placeholder'), el) : console.log(el.value))
  }
});

let showErrorMessage = (text, el) => {
  let $errorMessage = document.createElement('span');
  let $errorIcon = document.createElement('span');
  $errorIcon.classList.add('error-icon');
  $errorMessage.classList.add('error-message');
  
  if (text.includes('Email')) {
    console.log($errorMessage.textContent = `Looks like this is not an email`);
  } else {
    console.log($errorMessage.textContent = `${text} ${$errorLabel}`);
  }
  
  el.classList.add('error');
  el.insertAdjacentElement('afterend', $errorMessage);
  el.insertAdjacentElement('beforebegin', $errorIcon);
}