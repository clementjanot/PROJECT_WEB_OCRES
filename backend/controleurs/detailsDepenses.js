const DetailsDepenses =require('../models/DetailsDepenses');


exports.creatDetailsDepenses =  (req, res, next) => {
    delete req.body._id;
    const depenses = new DetailsDepenses({
      ...req.body
    });
    depenses.save()
      .then(() => res.status(201).json({ message: 'DetailsDepenses enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.modificationDetailsDepenses = (req, res, next) => {
    DetailsDepenses.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'DetailsDepenses modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteDetailsDepenses = (req, res, next) => {
    DetailsDepenses.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'DetailsDepenses supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneDetailsDepenses = (req, res, next) => {
    DetailsDepenses.findOne({ _id: req.params.id })
      .then(depenses => res.status(200).json(depenses))
      .catch(error => res.status(404).json({ error }));
  };

exports.getallDetailsDepenses = (req, res, next) => {
    DetailsDepenses.find()
      .then(depenses => res.status(200).json(depenses))
      .catch(error => res.status(400).json({ error }));
  };