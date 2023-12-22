import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
    // idUser will be default _id
    email: {
        type: String,
        // unique: true,
        required: [true, 'Email is required field']
    },
    imgAvatar:{
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Name is required field']
    },
    pwd: {
        type: String,
        required: [true, 'Password is required field']
    },
    verified: {
        type: Boolean
    },
    role: {
        type: String,
        enum: ['customer', 'staff', 'manager'],
        required: [true, 'Role is required field']
    },
    // customer infor
    phone: {
        type: String,
    },

    // staff infor and manager infor
    birthdate:{
        type: Date,
    },
    branchWork:{
        type: String,
    } 

})

// hash password
userSchema.statics.login = async function(email, pwd) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(pwd, user.pwd);
        if (auth) {
            if (user.verified == false) {
                throw Error('Not verified user');
            }
            return user;
        }
        throw Error('Wrong password');
    }
    throw Error('Not valid user');
}

const User = mongoose.model('User', userSchema);

export default User