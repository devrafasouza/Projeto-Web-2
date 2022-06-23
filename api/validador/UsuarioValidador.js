const Joi = require("joi")

const UserSchema = Joi.object({
    id: Joi.number()
        .integer()
        .greater(0),
    nome: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    senha: Joi.string()
        .min(6).required(),
}).with("id", "nome")

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
        const { error, value } = UserSchema.validate(req.body);
        if (error) {
            return res.json({ status: false, msg: "Dados incompletos" })
        }
        req.body = value
        return next()
    },
    validateSenha: function(req, res, next) {
        const { error, value } = UserSchema.validate(req.body);
        if (error) {
            return res.json({ status: false, msg: "Dados incompletos" })
        }
        req.body = value
        return next()

    }
}