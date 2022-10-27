const { ObjectId } = require('bson');
const { Schema, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
          type: ObjectId,
          default: new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
            // get: need to attach dateFormat
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
 
);

module.exports = reactionSchema;