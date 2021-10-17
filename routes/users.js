var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  res.json({users: [{name: 'Timmy'}]});
});

router.post('/', async (req, res) => {
  res.json({usuarios: "Salvos"});
});

router.put('/:id', async (req, res) => {
  res.json({usuarios: "Alterado " + req.params.id});
});

router.delete('/:id', async (req, res) => {
  res.json({usuarios: "Deletado " + req.params.id});
})

module.exports = router;
