import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
        type: String,
        required: `Enter an email`
    },
    firstName: {
        type: String,
        required: `Enter a first name`
    },
    lastName: {
        type: String,
        required: `Enter a last name`
    },
    password: {
        type: String,
        required: `Enter a password`
    },
    accountNumber: {
        type: Number,
    },
    accountType: {
        type: String,
        required: `Enter an account type`
    },
    invoices: {
        type: Array,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});