const init = () => {
    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validatePassowrd = (event) => {
        const input = event.currentTarget;

        if (input.value.length < 6) {
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');

    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassowrd);

    const errorHandler = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = "Error :(";
    }

    const successHandler = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Sent! :)";
        window.location.href = "usuario.html";
    }

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            submitButton.textContent = "Loading...";

            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                email: inputEmail.value,
                senha: inputPassword.value,
            })
        }).then((response) => {
            if (response.status !== 200) {
                return errorHandler();
            }

            successHandler();

        }).catch(() => {
            errorHandler();
        })
    }
}


window.onload = init;