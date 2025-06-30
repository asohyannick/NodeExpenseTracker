import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedTransaction } from '../../util/validator';
import createTransaction from '../../service/impl/transaction/createTransaction/createTransaction.impl';
const router = express.Router();
router.post('/create-transaction', authenticationToken, globalValidator(validateCreatedTransaction), createTransaction);
export default router;