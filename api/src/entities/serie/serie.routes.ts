import { Router } from 'express';

import SerieController from './serie.controller';
import SerieServices from './serie.service';

const router = Router();

router.post('/', SerieServices.createSerieComicsAuthor);
router.get('/', SerieController.getSeries);
router.get('/:id', SerieController.getById);
router.patch('/:id', SerieController.edit);
router.delete('/:id', SerieController.delete);

export default router;
