const inputRef = document.querySelector('#validation-input');

const onFocusLossEffect = inputRef.addEventListener('blur', (event) => {
   event.currentTarget.value.length === Number(inputRef.dataset.length) ?
   inputRef.setAttribute('class', 'valid') :
   inputRef.setAttribute('class', 'invalid');
})