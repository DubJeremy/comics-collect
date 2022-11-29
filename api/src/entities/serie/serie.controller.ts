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
        let search = req.query.search;
        try {
            if (req.query.isDone !== undefined) {
                where.done = req.query.isDone;
            } else if (search !== undefined) {
                let regex = new RegExp(`${search}`, 'ig');
                const series = await Serie.find({ title: { $regex: regex } });
                // if (series[0] === undefined) {
                //     const series = await Serie.find({ title: { $regex: regex } });

                //     return res.json(series);
                // }
                // console.log('$regex', series[1]);

                return res.json(series);
            }
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
