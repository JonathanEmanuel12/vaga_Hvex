const express = require('express');


const router = express.Router();
const controle = require('../controle/usuarioControle'); 

/* GET users listing. */
router.get('/', async (req, res) => {
  res.json(await controle.lerTodosUsuarios());  
});

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id);
  res.json(await controle.lerUsuario(req.params.id));
});

router.post('/', async (req, res) => {
  console.log("Chegou na rota");
  res.json(await controle.criarUsuario(req.body));
});

router.put('/:id', async (req, res) => {
  res.json(await controle.alterarUsuario(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  res.json(await controle.deletarUsuario(req.params.id));
})

module.exports = router;
