
import React, { FC } from 'react';

import styles from './styles.module.scss';

interface Props {
  handleEdit?: () => void;
}

const Tools: FC<Props> = ({ handleEdit, children }) => {
  return (
    <div className={styles.tools}>
      <button onClick={handleEdit}><i className="fa fa-pencil" aria-hidden="true"></i>{children}</button>
    </div>
  )
};

export default Tools;