import AuthorController from '../author/author.controller';
import Author from '../author/author.model';
import ComicController from '../comic/comic.controller';
import SerieController from './serie.controller';

export default class SerieServices {
    static async createSerieComicsAuthor(req: any, res: any) {
        try {
            let authorOfTheSerie = await Author.findOne({ name: req.body.author.name });
            if (authorOfTheSerie === null) {
                authorOfTheSerie = await AuthorController.createAuthor(req.body.author, res);
            }
            let comicsOfTheSerie = [];
            if (req.body.nbOfComics > 0) {
                for (let i = 0; i < req.body.nbOfComics; i++) {
                    let number = i + 1;
                    let comicOfTheSerie = await ComicController.createComic(
                        req.body,
                        res,
                        authorOfTheSerie?.id,
                        number,
                    );
                    comicsOfTheSerie.push(comicOfTheSerie.id);
                }
            }

            const serie = await SerieController.createSerie(req.body, res, authorOfTheSerie?.id, comicsOfTheSerie);

            return res.json(serie);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
