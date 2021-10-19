const {mongoose, Usuario} = require('../model/usuarioModel');

controleUsuario = {
    lerTodosUsuarios: async () => {
        try {
            const usuarios = await Usuario.find({}).lean().exec();
            return usuarios;
        }
        catch(error) {
            return { mensagem: error.message };
        }
    },
    criarUsuario: async (body) => {
        var date = new Date;
        
        const usuario = new Usuario({
            _id: body._id,
            nome: body.nome,
            login: body.login,
            senha: body.senha,
            data_ultimo_acesso: (date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear())
        });
        
        try {
            await usuario.save();   
            return { mensagem: "Sucesso!" };
        }
        catch(error) {
            return { mensagem: error.message };
        }
    },
    lerUsuario: async (identificador) => {
        try {
            const usuario = await Usuario.findById({_id: identificador}).lean().exec();
            if(usuario == null) {
                throw new Error("Nenhum usuário foi encontrado");
            }
            return usuario;
        }
        catch(error) {
            return { mensagem: error.message };
        }
        
    },
    alterarUsuario: async (identificador, body) => {
        try {
            const usuario = await Usuario.findById({_id: identificador}).exec();

            if(usuario == null) {
                throw new Error("Nenhum usuário encontrado");
            }
            
            if(body.nome) { usuario.nome = body.nome }
            if(body.login) { usuario.login = body.login }
            if(body.senha) { usuario.senha = body.senha }

            const date = new Date();
            usuario.data_ultimo_acesso = (date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear())

            await usuario.save();
            return { mensagem: "Alterado com sucesso" };
        }
        catch(error) {
            return { mensagem: error.message };
        }    
    },
    deletarUsuario: async (identificador) => {
        try {
            const usuario = await Usuario.deleteOne({_id: identificador});
            if(usuario.deletedCount == 0) {
                throw new Error("Nenhum usuário encontrado");
            }
            
            return {mensagem: "Deletado com sucesso"};
        }
        catch(error) {
            return { mensagem: error.message };
        }
        
    }
};

module.exports = controleUsuario;