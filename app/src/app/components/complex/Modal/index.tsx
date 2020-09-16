import React, { FC } from "react";
import { ModalProps } from 'types/app';

import styles from "./styles.module.scss";

const Modal: FC<ModalProps> = ({ isVisible, size, component: Component }) => {
  return isVisible ? (
    <div className={styles.overlay}>
      <div className={`${styles.wrapper} ${styles[size]}`}>
        <Component />
      </div>
    </div>
  ) : null;
};

export default Modal;
