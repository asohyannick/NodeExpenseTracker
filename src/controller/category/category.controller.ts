import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import createCategory from '../../service/impl/category/createCategory/createCategory.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedCategory } from '../../util/validator';
const router = express.Router();
router.post('/create-category', authenticationToken, globalValidator(validateCreatedCategory), createCategory);
export default router;