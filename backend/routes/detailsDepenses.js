const express = require('express');

const router = express.Router();

const DetailsDepensesCtrl = require('../controleurs/detailsDepenses');

router.post('/',DetailsDepensesCtrl.creatDetailsDepenses);

router.put('/:id',DetailsDepensesCtrl.modificationDetailsDepenses);

router.delete('/:id', DetailsDepensesCtrl.deleteDetailsDepenses);

router.get('/:id',DetailsDepensesCtrl.getOneDetailsDepenses);

router.get('/', DetailsDepensesCtrl.getallDetailsDepenses);

  

module.exports = router;