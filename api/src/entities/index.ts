import { Router } from 'express';

import seriesRoutes from './series/series.routes';
import comicsRoutes from './comic/comic.routes';

const router = Router();

router.get('/health', (req, res) =>
    res.status(200).json({
        version: process.env.npm_package_version,
        status: 'OK',
    }),
);

router.use('/series', seriesRoutes);
router.use('/comics', comicsRoutes);
router.use('*', (req, res) => res.sendStatus(404));

export default router;
