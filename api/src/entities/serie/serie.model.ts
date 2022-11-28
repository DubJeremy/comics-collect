import mongoose, { Schema } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

import { SerieInterface } from '../../public/types';

const Serie = new Schema<SerieInterface>(
    {
        title: { type: String, required: true, trim: true },
        done: { type: Boolean, required: true },
        preview: { type: String, required: false },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', trim: true },
        comics: { type: [mongoose.Schema.Types.ObjectId], ref: 'Comics', required: true },
        nbOfComics: { type: Number, required: true },
    },
    {
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
        timestamps: true,
    },
);

Serie.virtual('lastPayForm', {
    ref: 'PayForm',
    localField: '_id',
    foreignField: 'employee',
    justOne: true,
    options: { sort: { monthDate: -1 } },
});

Serie.index({ createdAt: 1 });
Serie.index({ updatedAt: 1 });

Serie.plugin(mongooseLeanVirtuals);
Serie.plugin(mongooseLeanDefaults);

export default mongoose.model<SerieInterface>('Serie', Serie);
