const express = require('express');

const router = express.Router();

const BudgetSemaineCtrl = require('../controleurs/budgetSemaine');

router.post('/',BudgetSemaineCtrl.creatBudgetSemaine);

router.put('/:id',BudgetSemaineCtrl.modificationBudgetSemaine);

router.delete('/:id', BudgetSemaineCtrl.deleteBudgetSemaine);

router.get('/:id',BudgetSemaineCtrl.getOneBudgetSemaine);

router.get('/', BudgetSemaineCtrl.getallBudgetSemaine);

  

module.exports = router;