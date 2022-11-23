import Series from './series.model';
// import SeriesModel from './series.model';
import { Request, Response } from 'express';
import { SeriesInterface } from '../../public/types';

// export default {
//     create: (req: any, res: any) => {
//         const { title, done, author } = req.body;
//         console.log(req.body);
//         SeriesModel.init().then(() => {
//             const series = new SeriesModel({
//                 title: '',
//                 done: false,
//                 author: '',
//             });
//             series
//                 .save()
//                 .then((result) => {
//                     res.json({ success: true, result });
//                 })
//                 .catch((err) => {
//                     res.status(400).json({
//                         success: false,
//                         result: console.log(err),
//                     });
//                 });
//         });
//     },
// };

export default class SeriesController {
    static async create(req: any, res: any) {
        console.log('$$$$$req', req, '$$$body', JSON.stringify(req.body));
        try {
            const series = new Series(req.body);
            await series.save();
            console.log(series);

            return res.json(series);
        } catch (e) {
            console.log('noooooooooooooooooooooon');
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
        console.log('$$$okjkjjk');
        try {
            const series = await Series.find({});

            return res.json(series);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e });
        }
    }
}
