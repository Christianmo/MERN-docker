import Post from '../models/Post';
import User from '../models/User';
import { TReqRes } from '../types/common';

export const getPosts:TReqRes = (_, resp, next) => {
  Post.find({}, (err: any, posts: any) => {
    return resp.status(200).json({ success: true, data: posts })
  })
}

export const addPost:TReqRes = async ({ body, session }: any, res, next) => {
  const post = new Post({ ...body, user: session.userId });
  const newPost = await post.save();

  try {
    const currentUser: any = await User.findById(session.userId);
    if (!currentUser || !currentUser.posts) return;
    currentUser.posts.push(newPost.id);
    currentUser.save();
  } catch (error) {
    
  }

  res.status(200).json({
    success: true,
    message: 'Post created successfully',
    data: newPost
  })
}
