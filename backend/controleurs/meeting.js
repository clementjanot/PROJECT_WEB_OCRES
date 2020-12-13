const Meeting =require('../models/Meeting');


exports.creatMeeting =  (req, res, next) => {
    delete req.body._id;
    const meeting = new Meeting({
      ...req.body
    });
    meeting.save()
      .then(() => res.status(201).json({ message: 'benef enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.modificationMeeting = (req, res, next) => {
    Meeting.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'benef modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteMeeting = (req, res, next) => {
    Meeting.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'benef supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneMeeting = (req, res, next) => {
    Meeting.findOne({ _id: req.params.id })
      .then(meeting => res.status(200).json(meeting))
      .catch(error => res.status(404).json({ error }));
  };

exports.getallMeeting = (req, res, next) => {
    Meeting.find()
      .then(meeting => res.status(200).json(meeting))
      .catch(error => res.status(400).json({ error }));
  };