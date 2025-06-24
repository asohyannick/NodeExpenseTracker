import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateUserRegistration } from '../../util/validator';
import register from '../../service/impl/auth/register/register.impl';
const router = express.Router();
router.post('create-account', authenticationToken, globalValidator(validateUserRegistration), register);
export default router;