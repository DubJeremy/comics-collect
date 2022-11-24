import mongoose, { Schema } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

import { ComicInterface, SeriesInterface, AuthorInterface } from '../../public/types';

const Comic = new Schema<ComicInterface>(
    {
        title: String,
        number: { type: Number },
        haveIt: { type: Boolean, required: true, default: false },
        researched: { type: Boolean, required: true, default: false },
        author: { type: String, required: true },
        serie: { type: [], required: false },
    },
    {
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
        timestamps: true,
    },
);

Comic.virtual('lastPayForm', {
    ref: 'PayForm',
    localField: '_id',
    foreignField: 'employee',
    justOne: true,
    options: { sort: { monthDate: -1 } },
});

Comic.index({ createdAt: 1 });
Comic.index({ updatedAt: 1 });

Comic.plugin(mongooseLeanVirtuals);
Comic.plugin(mongooseLeanDefaults);

export default mongoose.model<ComicInterface>('Comic', Comic);
