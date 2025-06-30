import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedFeedback } from '../../util/validator';
import createFeedback from '../../service/impl/feedback/createFeedback/createFeedback.impl';
const router = express.Router();
router.post('/submit-feedback', authenticationToken, globalValidator(validateCreatedFeedback), createFeedback);
export default router;