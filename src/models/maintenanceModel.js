import { Schema, model } from 'mongoose';

const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    vehicicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicicle',
        required: true
    },
    services: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
});

export default model ('Maintenance', maintenanceSchema);