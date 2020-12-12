const express = require('express');

const router = express.Router();

const TodoCtrl = require('../controleurs/todo');

router.post('/',TodoCtrl.creatTodo);

router.put('/:id',TodoCtrl.modificationTodo);

router.delete('/:id', TodoCtrl.deleteTodo);

router.get('/:id', TodoCtrl.getOneTodo);

router.get('/', TodoCtrl.getallTodo);

  

module.exports = router;