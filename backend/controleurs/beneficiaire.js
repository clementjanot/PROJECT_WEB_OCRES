const Beneficiaire =require('../models/Beneficiaire');


exports.creatBeneficiaire =  (req, res, next) => {
    delete req.body._id;
    const benef = new Beneficiaire({
      ...req.body
    });
    benef.save()
      .then(() => res.status(201).json({ message: 'benef enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.modificationBeneficiaire = (req, res, next) => {
    Beneficiaire.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'benef modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteBeneficiaire = (req, res, next) => {
    Beneficiaire.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'benef supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneBeneficiaire = (req, res, next) => {
    Beneficiaire.findOne({ _id: req.params.id })
      .then(benef => res.status(200).json(benef))
      .catch(error => res.status(404).json({ error }));
  };

exports.getallBeneficiaire = (req, res, next) => {
    Beneficiaire.find()
      .then(benef => res.status(200).json(benef))
      .catch(error => res.status(400).json({ error }));
  };