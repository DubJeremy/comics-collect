import Comic from './comic.model';
import { Request, Response } from 'express';

export default class ComicController {
    static async create(req: Request, res: Response) {
        try {
            const comic = new Comic(req.body);
            await comic.save();

            return res.json(comic);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async edit(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const comic = await Comic.findOneAndUpdate({ _id: id }, req.body);

            return res.json(comic);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const comic = await Comic.findById(id);

            return res.json(comic);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const comics = await Comic.find({});

            return res.json(comics);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const comic = await Comic.deleteOne({ _id: id });

            return res.json(comic);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
