import mongoose, { Schema } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

import { AuthorInterface } from '../../public/types';

const Author = new Schema<AuthorInterface>(
    {
        name: { type: String, required: true, trim: true, unique: true },
        serie: { type: mongoose.Schema.Types.ObjectId, ref: 'Serie', required: false },
        comic: { type: mongoose.Schema.Types.ObjectId, ref: 'Comics', required: false },
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
