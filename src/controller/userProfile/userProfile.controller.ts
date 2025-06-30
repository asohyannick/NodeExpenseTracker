import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedUserProfile, validateUpdatedUserProfile } from '../../util/validator';
import createUserProfile from '../../service/impl/userProfile/createUserProfile/createUserProfile.impl';
import showUserProfiles from '../../service/impl/userProfile/showUserProfiles/showProfiles.impl';
import showUserProfile from '../../service/impl/userProfile/showUserProfile/showUserProfile.impl';
import updateUserProfile from '../../service/impl/userProfile/updateUserProfile/updateUserProfile.impl';
const router = express.Router();
router.post('/create-user-profile', authenticationToken, globalValidator(validateCreatedUserProfile), createUserProfile);
router.get('/show-user-profiles', authenticationToken, showUserProfiles);
router.get('/show-user-profile/:id', authenticationToken, showUserProfile);
router.put('/show-user-profile/:id', authenticationToken, globalValidator(validateUpdatedUserProfile), updateUserProfile);

export default router;