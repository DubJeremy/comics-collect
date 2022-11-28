import Serie from './serie.model';
import { Request, Response } from 'express';

export default class SerieController {
    static async createSerie(req: any, res: any, authorOfTheSerie: any, comicsOfTheSerie: any) {
        try {
            const serie = new Serie({
                title: req.title,
                done: req.done,
                author: authorOfTheSerie,
                nbOfComics: req.nbOfComics,
                comics: comicsOfTheSerie,
            });
            await serie.save();

            return serie;
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const serie = await Serie.findById(id);

            return res.json(serie);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getSeries(req: Request, res: Response) {
        let where: any = {}; // TODO create types for requests
        if (req.query.isDone !== undefined) {
            where.done = req.query.isDone;
        } else if (req.query.author !== undefined) {
            where.author = req.query.author;
            console.log(where);
        }
        try {
            const series = await Serie.find(where);

            return res.json(series);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async edit(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const serie = await Serie.findOneAndUpdate({ _id: id }, req.body);

            return res.json(serie);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const serie = await Serie.deleteOne({ _id: id });

            return res.json(serie);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
