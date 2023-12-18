import mongoose from "mongoose";

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
// userSchema.pre('save', (doc, next)=> {

// })

// userSchema.post('save', (doc, next) => {

// });


userSchema.statics.login = async (email, pwd) => {

    var user = await User.find({email: email});
    user = user[0];

    console.log(pwd)
    // console.log(pwd === user.pwd)
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