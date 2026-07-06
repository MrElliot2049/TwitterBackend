import mongoose from "mongoose";

const hastagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, { timestamps : true});

const Hashtag = mongoose.model('Hashtag', hastagSchema);

export default Hashtag;