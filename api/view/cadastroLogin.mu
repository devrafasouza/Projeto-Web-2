<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>cadastro</title>
    <style>
        body {
            display: flex;
            flex-direction: row;
        }

        form {
            padding-top: 80px;
            margin: 0 auto;
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 150px;
        }
    </style>
</head>

<body>
    <form action="/cadastro" method="post">
        <label for="name">Digite seu nome</label>
        <input type="text" name="name">
        <label for="email">Digite seu email</label>
        <input type="email" name="email">
        <label for="username">Digite um nome de usuário</label>
        <input type="text" name="username">
        <label for="password">Digite uma senha</label>
        <input type="password" name="password">
        <label for="password2">Repita a senha</label>
        <input type="password" name="password2">
        <button type="submit">Enviar</button>

        <a href="/login">Voltar para a tela de login</a>
    </form>
</body>

</html>