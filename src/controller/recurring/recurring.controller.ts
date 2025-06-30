import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedRecurringExpense, validateUpdatedRecurringExpense } from '../../util/validator';
import createRecurringExpense from '../../service/impl/recurring/createRecurringExpense/createRecurring.impl';
import showRecurringExpenses from '../../service/impl/recurring/showRecurringExpenses/showRecurrings.impl';
import showRecurringExpense from '../../service/impl/recurring/showRecurringExpense/showRecurringExpense.impl';
import updateRecurringExpense from '../../service/impl/recurring/updateRecurringExpense/updateRecurringExpense.impl';
const router = express.Router();
router.post('/create-recurring-expense', authenticationToken, globalValidator(validateCreatedRecurringExpense), createRecurringExpense);
router.get('/show-recurring-expenses', authenticationToken, showRecurringExpenses);
router.get('/show-recurring-expense/:id', authenticationToken, showRecurringExpense);
router.put('/show-recurring-expense/:id', authenticationToken, globalValidator(validateUpdatedRecurringExpense), updateRecurringExpense);

export default router;