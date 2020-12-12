const Todo =require('../models/Todo');


exports.creatTodo =  (req, res, next) => {
    delete req.body._id;
    const todo = new Todo({
      ...req.body
    });
    todo.save()
      .then(() => res.status(201).json({ message: 'Todo enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.modificationTodo = (req, res, next) => {
    Todo.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Todo modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteTodo = (req, res, next) => {
    Todo.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Todo supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneTodo = (req, res, next) => {
    Todo.findOne({ _id: req.params.id })
      .then(todo => res.status(200).json(todo))
      .catch(error => res.status(404).json({ error }));
  };

exports.getallTodo = (req, res, next) => {
    Todo.find()
      .then(todo => res.status(200).json(todo))
      .catch(error => res.status(400).json({ error }));
  };