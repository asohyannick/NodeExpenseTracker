import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import createTag from '../../service/impl/tag/createTag/createTag.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedTag } from '../../util/validator';
const router = express.Router();
router.post('/create-tag', authenticationToken, globalValidator(validateCreatedTag), createTag);
export default router;