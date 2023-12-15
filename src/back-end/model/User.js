import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    pwd: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false
    }

})

// hash password
// userSchema.pre('save', (doc, next)=> {

// })

// userSchema.post('save', (doc, next) => {

// });


userSchema.statics.login = async (email, pwd) => {

    var user = await User.find({email: email});
    user = user[0];

    console.log(pwd)
    console.log(pwd === user.pwd)
    if (user)
    {
        // hash pwd compare later
        if (pwd === user.pwd)
        {
            if (user.verified == false)
            {
                throw Error ('Not verified user');
            }
            return user
        }
        else{
            throw Error ('Wrong password');
        }
    }
    throw Error('Not valid user')
}
const User = mongoose.model('User', userSchema);

export default User