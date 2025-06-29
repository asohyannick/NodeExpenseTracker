import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import createBudget from '../../service/impl/budget/createBudget/createBudget.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedBudget } from '../../util/validator';
const router = express.Router();
router.post('/create-budget', authenticationToken, globalValidator(validateCreatedBudget), createBudget);
export default router;