import AuthorController from '../author/author.controller';
import Author from '../author/author.model';
import ComicController from './comic.controller';

export default class ComicServices {
    static async createComicAndAuthor(req: any, res: any) {
        try {
            let authorOfTheComic = await Author.findOne({ name: req.body.author.name });
            if (authorOfTheComic === null) {
                authorOfTheComic = await AuthorController.createAuthor(req.body.author, res);
            }
            let number = req.body.number;
            const comic = await ComicController.createComic(req.body, res, authorOfTheComic?.id, number);

            return res.json(comic);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
