import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User: any = new Schema({
  email: String,
  password: String,
  posts: [{
    type:  mongoose.Types.ObjectId,
    ref: 'Posts'
  }]
})

export default mongoose.model('User', User);