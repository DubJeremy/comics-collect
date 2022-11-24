import Series from './series.model';
import { Request, Response } from 'express';

export default class SeriesController {
    static async create(req: any, res: any) {
        try {
            const series = new Series(req.body);
            await series.save();

            return res.json(series);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async edit(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const series = await Series.findOneAndUpdate({ _id: id }, req.body);

            return res.json(series);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const series = await Series.findById(id);

            return res.json(series);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const series = await Series.find({});

            return res.json(series);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const series = await Series.deleteOne({ _id: id });

            return res.json(series);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
