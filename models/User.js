const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
            // [/^([A-Z0-9_!#$%&'*+/=?`{|}~^.-]+)@([A-Z0-9.-]+)$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
}
);

// userSchema.virtual('friendCount').get(function() {
//     return this.friends.length;
// });

const User = model('User', userSchema);

module.exports = User;