const express = require('express');

const router = express.Router();

const BeneficiaireCtrl = require('../controleurs/beneficiaire');

router.post('/',BeneficiaireCtrl.creatBeneficiaire);

router.put('/:id',BeneficiaireCtrl.modificationBeneficiaire);

router.delete('/:id', BeneficiaireCtrl.deleteBeneficiaire);

router.get('/:id',BeneficiaireCtrl.getOneBeneficiaire);

router.get('/', BeneficiaireCtrl.getallBeneficiaire);

  

module.exports = router;