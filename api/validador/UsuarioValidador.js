const Joi = require("joi")

const UserSchema = Joi.object({
    id: Joi.number()
        .integer()
        .greater(0),
    nome: Joi.string()
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    senha: Joi.string()
        .min(6)
        .required(),
}).with('id', 'email')

module.exports = {
    validateId: function(req, res, next) {
        const { error, value } = Joi.number().integer().greater(0).validate(req.params.id)

        if (error) {
            return res.status(500).json({ status: false, msg: "O código não é válido" });
        }

        req.params.id = value
        return next()
    },
    validateEmail: function(req, res, next) {
        const { error, value } = Joi.string().email().validate(req.params.email)

        if (error) {
            return res.status(500).json({ status: false, msg: "email invalido" });
        }

        req.params.email = value
        return next()
    },
    validateSenha: function(req, res, next) {
        const { error, value } = Joi.number().min(6).validate(req.params.senha)

        if (error) {
            return res.status(500).json({ status: false, msg: "senha invalido" });
        }

        req.params.senha = value
        return next()
    },
    validateCadastro: function(req, res, next) {
        const { error, value } = UserSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ status: false, msg: "Cadastro invalido" })
        }
        req.body = value
        return next()

    }
}