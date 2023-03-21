const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        max_length: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        toJson: {
            getters: true,
},
    usernames: {
        type: String,
        required: true
},
    reactions: [
    {
        type: Schema.Types.ObjectId,
        ref: 'reaction'
    },
],

    reactionCount: [
    {
        type: Schema.Types.ObjectId,
        ref: 'reactionCount'
    }
]
    }

})

 thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactionCount.length;
 }
 );


const Thought = model('thought', thoughtSchema);

module.exports = Thought;