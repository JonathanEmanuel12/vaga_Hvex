const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api_desenvolvimento');

const usuarioSchema = new mongoose.Schema({
    _id: String,
    nome: String,
    login: String,
    senha: String,
    data_ultimo_acesso: String
}, { collection: 'usuarios'});

const Usuario = mongoose.model('usuario', usuarioSchema, 'usuarios');

module.exports = {Mongoose: mongoose, Usuario: Usuario};    