import { Router } from 'express';

import seriesRoutes from './serie/serie.routes';
import comicsRoutes from './comic/comic.routes';
import authorsRoutes from './author/author.routes';

const router = Router();

router.get('/health', (req, res) =>
    res.status(200).json({
        version: process.env.npm_package_version,
        status: 'OK',
    }),
);

router.use('/serie', seriesRoutes);
router.use('/comic', comicsRoutes);
router.use('/author', authorsRoutes);
router.use('*', (req, res) => res.sendStatus(404));

export default router;
