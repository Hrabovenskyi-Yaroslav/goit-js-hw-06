
const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
     event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

     
    if (email === '' || password === '') {
        alert('All fields must be filled!')
    } else {
        const formInput = {
        email,
        password,
    }
        console.log(formInput);
        
    }
    
    formRef.reset()
}




