import { Router } from 'express';

import ComicController from './comic.controller';
import ComicServices from './comic.service';

const router = Router();

router.post('/', ComicServices.createComicAndAuthor);
router.get('/', ComicController.getAll);
router.get('/:id', ComicController.getById);
router.patch('/:id', ComicController.edit);
router.delete('/:id', ComicController.delete);

export default router;
