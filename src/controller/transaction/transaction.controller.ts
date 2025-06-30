import express from 'express';
import authenticationToken from '../../middleware/auth/auth.middleware';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateCreatedTransaction, validateUpdatedTransaction } from '../../util/validator';
import createTransactionReport from '../../service/impl/transaction/createTransactionReport/createTransactionReport.impl';
import showTransactionReports from '../../service/impl/transaction/showTransactionReports/showTransactionReports.impl';
import showTransactionReport from '../../service/impl/transaction/showTransactionReport/showTransactionReport.impl';
import updateTransactionReport from '../../service/impl/transaction/updateTransactionReport/updateTransactionReport.impl';
const router = express.Router();
router.post('/create-transaction-report', authenticationToken, globalValidator(validateCreatedTransaction), createTransactionReport);
router.get('/show-transaction-reports', authenticationToken, showTransactionReports);
router.get('/show-transaction-report/:id', authenticationToken, showTransactionReport);
router.put('/update-transaction-report/:id', authenticationToken, globalValidator(validateUpdatedTransaction), updateTransactionReport);

export default router;