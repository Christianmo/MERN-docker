import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from 'constants/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss';

function Nav() {
  return (
    <Fragment>
      <nav className={styles.container}>
        <span>Mallee</span>
        <div className={styles.actions}>
          <Link to={ROUTES.USERS}>Profile</Link>
          <button>Save</button>
          <button>Publish</button>
        </div>
      </nav>
      <ToastContainer />
    </Fragment>
  );
}

export default Nav;
