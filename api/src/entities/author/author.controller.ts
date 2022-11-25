import Author from './author.model';
import { Request, Response } from 'express';

export default class AuthorController {
    static async createAuthor(req: any, res: any) {
        try {
            const author = new Author(req);
            await author.save();
            return author;
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async edit(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const author = await Author.findOneAndUpdate({ _id: id }, req.body);

            return res.json(author);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const author = await Author.findById(id);

            return res.json(author);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const author = await Author.find({});

            return res.json(author);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const author = await Author.deleteOne({ _id: id });

            return res.json(author);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
