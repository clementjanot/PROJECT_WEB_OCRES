const express = require('express');

const router = express.Router();

const CategoriesDepensesCtrl = require('../controleurs/categoriesDepenses');

router.post('/',CategoriesDepensesCtrl.creatCategoriesDepenses);

router.put('/:id',CategoriesDepensesCtrl.modificationCategoriesDepenses);

router.delete('/:id', CategoriesDepensesCtrl.deleteCategoriesDepenses);

router.get('/:id',CategoriesDepensesCtrl.getOneCategoriesDepenses);

router.get('/', CategoriesDepensesCtrl.getallCategoriesDepenses);

  

module.exports = router;