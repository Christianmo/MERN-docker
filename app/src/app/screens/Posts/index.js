import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postPropTypes } from '@proptypes/post';
import { t } from 'i18next';
import postActions from '@redux/posts/actions';
import Nav from '@components/complex/Nav';
import AddPostForm from './components/AddPostForm';

import styles from './styles.scss';

const success = () => toast('Success !');
const failure = () => toast('Failure !');

function Posts({ posts, getPosts, addPost }) {
  useEffect(() => {
    getPosts();
  }, []);

  const renderPost = post => (
    <li key={post.id}>{post.title}</li>
  );

  return !posts
    ? <span>Loading...</span>
    : (
      <div>
        <Nav />
        <h1 className={styles.title}>{t('posts:title')}</h1>
        <AddPostForm addPost={addPost} />
        <ul>{posts.map(renderPost)}</ul>
      </div>
    );
}

function mapStateToProps(store) {
  return {
    posts: store.postsReducer.postsData,
    postsError: store.postsReducer.postsError,
    postsLoading: store.postsReducer.postsLoading,
    singlePost: store.postsReducer.postData,
    singlePostError: store.postsReducer.postError,
    singlePostLoading: store.postsReducer.postLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(postActions.getPosts(success, failure)),
    addPost: () => dispatch(postActions.addPost({ title: 'Hello World!' }, success, failure)),
  };
}

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: postPropTypes,
  getPosts: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
