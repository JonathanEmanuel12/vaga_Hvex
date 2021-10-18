const express = require('express');
const app = express();


const path = require('path');
const cookieParser = require('cookie-parser');

const usuarios = require('./routes/usuarios');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/users', usuarios);

module.exports = app;
