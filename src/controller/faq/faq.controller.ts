import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedFAQ } from '../../util/validator';
import createFAQ from '../../service/impl/faq/createFAQ/createFAQ.impl';
const router = express.Router();
router.post('/create-question', authenticationToken, globalValidator(validateCreatedFAQ), createFAQ);
export default router;