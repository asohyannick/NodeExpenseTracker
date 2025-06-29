import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import createNotification from '../../service/impl/notification/createNotification/createNotification.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedNotification } from '../../util/validator';
const router = express.Router();
router.post('/create-notification', authenticationToken, globalValidator(validateCreatedNotification), createNotification);
export default router;