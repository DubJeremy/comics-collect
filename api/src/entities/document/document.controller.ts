import Document from './document.model';
import { Request, Response } from 'express';

export default class EmployeeController {
    static async create(req: Request, res: Response) {
        try {
            const document = new Document(req.body);
            await document.save();

            return res.json(document);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async edit(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const document = await Document.findOneAndUpdate({ _id: id }, req.body);

            return res.json(document);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const document = await Document.findById(id);

            return res.json(document);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const documents = await Document.find({});

            return res.json(documents);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
