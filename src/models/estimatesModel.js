import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EstimateSchema = new Schema({
    email: {
        type: String,
        required: 'Enter an email'
    },
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    accountNumber: {
        type: Number,
    },
    accountType: {
        type: String,
        required: 'Enter an account type'
    },
    services: {
        type: Array,
        required: "Enter Services"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});