import mongoose, { Schema } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

import { ComicInterface, SeriesInterface, AuthorInterface } from '../../public/types';

const Author = new Schema<AuthorInterface>(
    {
        name: { type: String, required: true, trim: true },
        series: { type: String, required: false },
        comics: { type: [], required: false },
    },
    {
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
        timestamps: true,
    },
);

Author.virtual('lastPayForm', {
    ref: 'PayForm',
    localField: '_id',
    foreignField: 'employee',
    justOne: true,
    options: { sort: { monthDate: -1 } },
});

Author.index({ createdAt: 1 });
Author.index({ updatedAt: 1 });

Author.plugin(mongooseLeanVirtuals);
Author.plugin(mongooseLeanDefaults);

export default mongoose.model<AuthorInterface>('Author', Author);
