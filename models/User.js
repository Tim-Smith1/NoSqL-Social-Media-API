const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      }
      
    },
    thoughts:[
      {
      type: Schema.Types.ObjectId,
      ref:'thought'
  }
],
  friends:[
  {
      type: Schema.Types.ObjectId,
      ref:'user'

  }
],
  //friends: [friendcount],
},
{
  toJSON: {
    virtuals: true,
    //getters: true,
  },
  id: false
}
);
userSchema.virtual('friendcount').get(function(){
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;