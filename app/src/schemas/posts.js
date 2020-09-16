export const denormalizePosts = data => data.map(post => ({
  body: post.body,
  excerpt: `${post.body.substr(0, 10)}...`,
  id: post.id,
  title: post.title,
  userId: post.userId,
}));
