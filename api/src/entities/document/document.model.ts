import mongoose, { Schema } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

export interface DocumentInterface {
    title: string;
    name: string;
    test: string;
    value: number;
}

const Document = new Schema<DocumentInterface>(
    {
        title: String,
        name: { type: String, required: true },
        test: { type: String, default: 'test' },
        value: { type: Number, default: 1 },
    },
    {
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
        timestamps: true,
    },
);

Document.virtual('lastPayForm', {
    ref: 'PayForm',
    localField: '_id',
    foreignField: 'employee',
    justOne: true,
    options: { sort: { monthDate: -1 } },
});

Document.index({ createdAt: 1 });
Document.index({ updatedAt: 1 });

Document.plugin(mongooseLeanVirtuals);
Document.plugin(mongooseLeanDefaults);

export default mongoose.model<DocumentInterface>('Document', Document);
