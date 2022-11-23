import mongoose, { Schema } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

import { ComicInterface, SeriesInterface } from '../../public/types';

const Series = new Schema<SeriesInterface>(
    {
        title: { type: String, required: true, trim: true },
        done: { type: Boolean, required: true },
        preview: { type: String, required: false },
        author: { type: String, required: true, trim: true },
        comics: { type: [], required: false },
    },
    {
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
        timestamps: true,
    },
);

Series.virtual('lastPayForm', {
    ref: 'PayForm',
    localField: '_id',
    foreignField: 'employee',
    justOne: true,
    options: { sort: { monthDate: -1 } },
});

Series.index({ createdAt: 1 });
Series.index({ updatedAt: 1 });

Series.plugin(mongooseLeanVirtuals);
Series.plugin(mongooseLeanDefaults);

export default mongoose.model<SeriesInterface>('Series', Series);
