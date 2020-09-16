import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Nav from '@components/complex/Nav';
import { connect } from 'react-redux';
import userActions from '@redux/users/actions';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import styles from './styles.scss';

const success = () => toast('Success Users load !');
const failure = () => toast('Failure !');

function Users({ users, getUsers }) {
  useEffect(() => {
    getUsers();
  }, []);

  const renderUser = user => (
    <li key={user.id}>{`${user.name}, ${user.email}`}</li>
  );

  return !users
    ? <span>Loading...</span>
    : (
      <div>
        <Nav />
        <h1 className={styles.title}>{t('users:title')}</h1>
        <ul>{users.map(renderUser)}</ul>
      </div>
    );
}

function mapStateToProps(store) {
  return {
    users: store.usersReducer.usersData,
    usersError: store.usersReducer.usersError,
    usersLoading: store.usersReducer.usersLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(userActions.getUsers(success, failure)),
  };
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
  })).isRequired,
  getUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
