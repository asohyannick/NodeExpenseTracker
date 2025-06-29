import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import createCurrency from '../../service/impl/currency/createCurrency/createCurrency.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedCurrency } from '../../util/validator';
const router = express.Router();
router.post('/create-currency', authenticationToken, globalValidator(validateCreatedCurrency), createCurrency);
export default router;