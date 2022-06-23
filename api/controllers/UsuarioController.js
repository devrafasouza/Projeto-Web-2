const { UsuarioServices } = require('../services');
const usuarioServices = new UsuarioServices();

class UsuarioController {
    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await usuarioServices.pegaTodosOsRegistros(); /* pega todos os usuarios do banco utilizando o metodo findAll do sequelize */
            return res.status(200).json(todosOsUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    } /* REFATORADO COM SERVICE */

    static async pegaUmUsuario(req, res) {
        const { id } = req.params;
        try {
            const umUsuario = await usuarioServices.pegaUmRegistro(Number(id)) /* pega um usuario atraves do seu id, pelo banco utilizando o metodo findOne do sequelize */
            return res.status(200).json(umUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */

    static async registraUsuario(req, res) {
        const novoUsuario = req.body;
        novoUsuario.senha = await usuarioServices.hashSenha(novoUsuario);
        try {
            const novoUsuarioCriado = await usuarioServices.criaRegistro(novoUsuario) 
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */

    static async atualizaUsuario(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await usuarioServices.atualizaRegistro(novasInfos, Number(id)); 
            const usuarioAtualizado = await usuarioServices.pegaUmRegistro(Number(id));
            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */

    static async apagaUsuario(req, res) {
        const { id } = req.params;
        try {
            await usuarioServices.apagaRegistro(Number(id));
            return res.status(200).json({ mensagem: `Usuario com o id: ${id} foi deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */

    static async loginUsuario(req, res) {
        const { email, senha } = req.body;

        try {
            const usuarioValido = await usuarioServices.loginUsuario(email);
            if (!usuarioValido) {
                throw new Error("Email ou senha invalida!");
            }
            const senhaValida = await usuarioServices.comparaHash(senha, usuarioValido.senha);
            if (!senhaValida) {
                throw new Error("Email ou senha invalida!");
            }
            const token = await usuarioServices.criaToken(usuarioValido.id); 

            return res.status(200).json(token);


        } catch (error) {
            return res.status(500).json(error.message);
        }

    } /* REFATORADO COM SERVICE */

}

module.exports = UsuarioController;