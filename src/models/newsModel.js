import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NewsSchema = new Schema({
    headline: {
        type: String,
        required: `Enter a Heading`
    },
    text: {
        type: String,
        required: `Enter Text`
    }
});