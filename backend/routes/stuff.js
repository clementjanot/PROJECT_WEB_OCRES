const express = require('express');

const router = express.Router();

const stuffCtrl = require('../controleurs/stuff');

router.post('/',stuffCtrl.creatThing);

router.put('/:id',stuffCtrl.modification );

router.delete('/:id', stuffCtrl.deleteThing);

router.get('/:id', stuffCtrl.getOneThing);

router.get('/', stuffCtrl.getallthings);

  

module.exports = router;