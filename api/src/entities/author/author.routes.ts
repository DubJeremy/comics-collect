import { Router } from 'express';

import AuthorController from './author.controller';

const router = Router();

router.post('/', AuthorController.create);
router.get('/', AuthorController.getAll);
router.get('/:id', AuthorController.getById);
router.patch('/:id', AuthorController.edit);
router.delete('/:id', AuthorController.delete);

export default router;
