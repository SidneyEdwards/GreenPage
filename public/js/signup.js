const signupFormEl = document.querySelector('#signup-form');
console.log('hello')

const showError = (parentEl, errorText) => {
  const errorPEl = document.createElement('p');
  errorPEl.classList.add('error-element');
  errorPEl.textContent = errorText;
  parentEl.appendChild(errorPEl);
};

const removeAllErrors = () => {
  const allErrors = document.querySelectorAll('.error-element');
  allErrors.forEach((el) => el.remove());
};


const signupFormHandler = async (event) => {
  event.preventDefault();
  removeAllErrors();

  const username= document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();


  const bodyObj = {
    username,
    password
  }

  if (!username || !password) {
    console.log(bodyObj)
    showError(signupFormEl, 'Please fill out all fields.');
    return;
  }

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(bodyObj),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const res = await response.json();
      console.log(res);
      const errorMsg = res.errors[0].message;
      showError(signupFormEl, errorMsg);
      return;
    }

    document.location.replace('/home');
  } catch (err) {
    console.log(err);
    showError(signupFormEl, "A signup error has ocurred.");
  }
};
signupFormEl.addEventListener('submit', signupFormHandler);


