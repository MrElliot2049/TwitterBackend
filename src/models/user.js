import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email : {
        type: String, 
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre("save", function () {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPass = bcrypt.hashSync(user.password, SALT);

    user.password = encryptedPass;
});

userSchema.methods.comparePass = function compare(pass) {
    return bcrypt.compareSync(pass, this.password);
}

userSchema.methods.genJwt = function generate() {
    return jwt.sign({id: this.id , email: this.email}, 'twitter_secret', {
        expiresIn: '1h'
    });
}


const User = mongoose.model('User',userSchema);

export default User;