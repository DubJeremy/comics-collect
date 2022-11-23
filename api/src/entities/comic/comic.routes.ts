import { Router } from 'express';

import ComicController from './comic.controller';

const router = Router();

router.post('/', ComicController.create);
router.get('/', ComicController.getAll);
router.get('/:id', ComicController.getById);
router.patch('/:id', ComicController.edit);
router.put('/:id', ComicController.edit);

export default router;
