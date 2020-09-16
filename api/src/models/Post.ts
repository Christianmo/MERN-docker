import mongoose from 'mongoose';

const  { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  }
});

export default mongoose.model('Posts', PostSchema)