import AuthorController from '../author/author.controller';
import Author from '../author/author.model';
import SerieController from './serie.controller';

export default class SerieServices {
    static async createSerieAndAuthor(req: any, res: any) {
        try {
            let authorOfTheSerie = await Author.findOne({ name: req.body.author.name });
            if (authorOfTheSerie === null) {
                authorOfTheSerie = await AuthorController.createAuthor(req.body.author, res);
            }
            const serie = await SerieController.createSerie(req.body, res, authorOfTheSerie?.id);

            return res.json(serie);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
