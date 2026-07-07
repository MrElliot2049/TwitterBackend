import mongoose from "mongoose";

const hastagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    tweets : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, { timestamps : true});

hastagSchema.pre("save",  function ()  {
    this.title = this.title.toLowerCase();
})
const Hashtag = mongoose.model('Hashtag', hastagSchema);

export default Hashtag;