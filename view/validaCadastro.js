const init = () => {
    var erroMostra;
    const validateEmail = (event) => {
            const input = event.currentTarget;
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const emailTest = regex.test(input.value);

            if (!emailTest) {
                submitButton.setAttribute("disabled", "disabled");
                input.nextElementSibling.classList.add('error');
                erroMostra = 'email invalido';
            } else {
                submitButton.removeAttribute("disabled");
                input.nextElementSibling.classList.remove('error');

            }
        } // validador de email no front

    const validatePassowrd = (event) => {
            const input = event.currentTarget;

            if (input.value.length < 6) {
                submitButton.setAttribute("disabled", "disabled");
                input.nextElementSibling.classList.add('error');
                erroMostra = 'senha invalida';
            } else {
                submitButton.removeAttribute("disabled");
                input.nextElementSibling.classList.remove('error');
            }
        } // validador de senha no front para facilitar o teste usei so como regra senha maior que 6, mas da pra usar a padronagem do REGEX como usado no email.

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');
    const inputName = document.querySelector('input[type="text"]');

    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassowrd);

    const mostraErro = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = erroMostra;
    }

    const mostraSucesso = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Cadastrado";
        window.location.href = "login.html";
    }

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            submitButton.textContent = "Loading...";

            fetch('http://localhost:3000/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        nome: inputName.value,
                        email: inputEmail.value,
                        senha: inputPassword.value,
                    }) //conectando com a api tendo em vista que o front e o back estão separados e não há classe de modelos para integrar
            }).then((response) => {
                if (response.status !== 200) {
                    return mostraErro();
                }

                mostraSucesso();

            }).catch(() => {
                mostraErro();
            })
        })
    }
}


window.onload = init;