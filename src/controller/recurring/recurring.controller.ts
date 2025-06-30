import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedRecurringExpense } from '../../util/validator';
import createRecurringExpense from '../../service/impl/recurring/createRecurring/createRecurring.impl';
const router = express.Router();
router.post('/create-recurring-expense', authenticationToken, globalValidator(validateCreatedRecurringExpense), createRecurringExpense);
export default router;