const BudgetSemaine =require('../models/BudgetSemaine');


exports.creatBudgetSemaine =  (req, res, next) => {
    delete req.body._id;
    const budget = new BudgetSemaine({
      ...req.body
    });
    budget.save()
      .then(() => res.status(201).json({ message: 'BudgetSemaine enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.modificationBudgetSemaine = (req, res, next) => {
    BudgetSemaine.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'BudgetSemaine modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteBudgetSemaine = (req, res, next) => {
    BudgetSemaine.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'BudgetSemaine supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneBudgetSemaine = (req, res, next) => {
    BudgetSemaine.findOne({ _id: req.params.id })
      .then(budget => res.status(200).json(budget))
      .catch(error => res.status(404).json({ error }));
  };

exports.getallBudgetSemaine = (req, res, next) => {
    BudgetSemaine.find()
      .then(budget => res.status(200).json(budget))
      .catch(error => res.status(400).json({ error }));
  };