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
            console.log("chegou aqui: " + usuario);
            await usuario.save();   
            return { mensagem: "Sucesso!" };
        }
        catch(error) {
            return { mensagem: error.message };
        }
    },
    lerUsuario: async (identificador) => {
        try {
            return await Usuario.findById({_id: identificador}).lean().exec();
        }
        catch(error) {
            return { mensagem: error.message };
        }
        
    },
    alterarUsuario: async (identificador, body) => {
        console.log("Chegou no controle");

        try {
            const usuario = await Usuario.findById({_id: identificador}).exec();

            console.log("Chegou no try" + usuario);

            if(usuario == null) {
                throw new Error("Nenhum usuário encontrado");
            }
            
            if(body.nome) { usuario.nome = body.nome }
            if(body.login) { usuario.login = body.login }
            if(body.senha) { usuario.senha = body.senha }

            const date = new Date();
            usuario.data_ultimo_acesso = (date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear())

            await usuario.save();
            return usuario;
        }
        catch(error) {
            return { mensagem: error.message };
        }    
    },
    deletarUsuario: async (identificador) => {
        console.log(identificador);
        try {
            await Usuario.deleteOne({_id: identificador});
            return {mensagem: "Deletado com sucesso"};
        }
        catch(error) {
            return { mensagem: error.message };
        }
        
    }
};

module.exports = controleUsuario;