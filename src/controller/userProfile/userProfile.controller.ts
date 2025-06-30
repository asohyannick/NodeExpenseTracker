import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedUserProfile } from '../../util/validator';
import createUserProfile from '../../service/impl/userProfile/createUserProfile/createUserProfile.impl';
const router = express.Router();
router.post('/create-user-profile', authenticationToken, globalValidator(validateCreatedUserProfile), createUserProfile);
export default router;