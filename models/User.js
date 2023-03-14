//dependencies
const {Schema, model, Types} = require('mongoose');

//for ensuring email is a valid email address
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

//user schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        require: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref:'User',
    }],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

//counts friends
userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});

//creates user model using the user Schema.
const User = model('User', userSchema);

//exports user model
module.exports = User;