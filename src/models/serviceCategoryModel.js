import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ServiceCategorySchema = new Schema({
    customerType: {
        type: String,
    },
    services: {
        type: Array,
    }
});