import { Router } from 'express';

import documentRoutes from './document/document.routes';

const router = Router();

router.get('/health', (req, res) =>
    res.status(200).json({
        version: process.env.npm_package_version,
        status: 'OK',
    }),
);

router.use('/v1/document', documentRoutes);
router.use('*', (req, res) => res.sendStatus(404));

export default router;
