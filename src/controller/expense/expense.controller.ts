import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import createExpenses from '../../service/impl/expense/newExpenses/newExpenses.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedExpenses } from '../../util/validator';
const router = express.Router();
router.post('/create-expenses', authenticationToken, globalValidator(validateCreatedExpenses), createExpenses);
export default router;