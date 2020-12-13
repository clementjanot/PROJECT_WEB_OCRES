const express = require('express');

const router = express.Router();

const MeetingCtrl = require('../controleurs/meeting');

router.post('/',MeetingCtrl.creatMeeting);

router.put('/:id',MeetingCtrl.modificationMeeting);

router.delete('/:id', MeetingCtrl.deleteMeeting);

router.get('/:id',MeetingCtrl.getOneMeeting);

router.get('/', MeetingCtrl.getallMeeting);

  

module.exports = router;