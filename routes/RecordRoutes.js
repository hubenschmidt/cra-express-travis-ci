import { Router } from 'express';
import RecordController from '../controllers/RecordController';

const router = Router();

router.get('/', RecordController.getAllRecords);
router.post('/', RecordController.addRecord);
router.get('/:id', RecordController.getARecord);
router.put('/:id', RecordController.updatedRecord);
router.delete('/:id', RecordController.deleteRecord);

export default router;
