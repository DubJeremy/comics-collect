import { Router } from 'express';

import DocumentController from './document.controller';

const router = Router();

router.post('/', DocumentController.create);
router.get('/', DocumentController.getAll);
router.get('/:id', DocumentController.getById);
router.put('/:id', DocumentController.edit);

export default router;
