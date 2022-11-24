import { Router } from 'express';

import SeriesController from './series.controller';

const router = Router();

router.post('/', SeriesController.create);
router.get('/', SeriesController.getAll);
router.get('/:id', SeriesController.getById);
router.patch('/:id', SeriesController.edit);
router.delete('/:id', SeriesController.delete);

export default router;
