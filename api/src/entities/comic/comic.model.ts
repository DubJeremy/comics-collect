import mongoose, { Schema } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

import { ComicInterface } from '../../public/types';

const Comic = new Schema<ComicInterface>(
    {
        title: String,
        subtitle: { type: String, required: false },
        number: { type: Number },
        haveIt: { type: Boolean, required: true, default: false },
        researched: { type: Boolean, required: true, default: false },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
        serie: { type: mongoose.Schema.Types.ObjectId, ref: 'Series', required: false },
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
