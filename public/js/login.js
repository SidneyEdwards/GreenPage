const loginFormEl = document.querySelector('#login-form');
// const signupFormEl = document.querySelector('#signup-form');
const loadingDivEl = document.querySelector("#loading-div");

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


const loginFormHandler = async (event) => {
  event.preventDefault();
  removeAllErrors();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (!username || !password) {
    showError(loginFormEl, "Please provide both an username and password.")
    return;
  }

  const bodyObj = {
    username,
    password
  }

  try {

    loadingDivEl.classList.remove('d-none');

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(bodyObj),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const res = await response.json();
      console.log(res);
      const errorMsg = res.message;
      showError(loginFormEl, errorMsg);
      return;
    }
    document.location.replace('/profile');

  } catch (err) {
    console.log(err);
    showError(loginFormEl, "A login error has ocurred.")
  } finally {
    loadingDivEl.classList.add('d-none');
  }
};

loginFormEl.addEventListener('submit', loginFormHandler);
// signupFormEl.addEventListener('submit', signupFormHandler);
