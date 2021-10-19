# vaga_Hvex
Api Rest

Este projeto tem o objetivo de concorrer a uma vaga na empresa HVEX.

Se trata de uma API rest que fornece um CRUD para usuarios.

### Tecnologias utilizadas
* Node.js
* Express
* MongoDB
* Mongoose

### Rotas

Url completa: http://localhost:3000/api/usuarios

**Create - POST /**  corpo: _id, nome, login, senha.

**Read - GET /:id e GET /**

**Update - PUT /:id** corpo: nome, login, senha.

**Delete - DELETE /:id**

### Instruções para teste

Para testar esta API é necessário ter instalado localmente: Node.js e MongoDB

As demais dependências estão descritas no package-json e podem ser instaladas utilizando o npm.

Após iniciar o servidor mongoDB localmente na porta 27017, com o comando npm start a aplicação é iniciada.

