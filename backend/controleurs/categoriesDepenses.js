const CategoriesDepenses =require('../models/CategoriesDepenses');


exports.creatCategoriesDepenses =  (req, res, next) => {
    delete req.body._id;
    const depenses = new CategoriesDepenses({
      ...req.body
    });
    depenses.save()
      .then(() => res.status(201).json({ message: 'CategoriesDepenses enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.modificationCategoriesDepenses = (req, res, next) => {
    CategoriesDepenses.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'CategoriesDepenses modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteCategoriesDepenses = (req, res, next) => {
    CategoriesDepenses.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'CategoriesDepenses supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneCategoriesDepenses = (req, res, next) => {
    CategoriesDepenses.findOne({ _id: req.params.id })
      .then(depenses => res.status(200).json(depenses))
      .catch(error => res.status(404).json({ error }));
  };

exports.getallCategoriesDepenses = (req, res, next) => {
    CategoriesDepenses.find()
      .then(depenses => res.status(200).json(depenses))
      .catch(error => res.status(400).json({ error }));
  };