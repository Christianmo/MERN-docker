import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import Nav from "app/components/complex/Nav";
import Blocks from "./components/Blocks";
import Options from "./components/Options";
import AdvertisementsProps from "types/app";
import Modal from "app/components/complex/Modal";
import { ModalProps } from 'types/app';

import styles from "./styles.module.scss";

interface RootState {
  appReducer: {
    modalValues: ModalProps;
  };
}

const Advertisements: FC<AdvertisementsProps> = ({ match }) => {
  const modalValues = useSelector(
    (state: RootState) => state.appReducer.modalValues
  );

  return (
    <Fragment>
      <Nav />
      {console.log(modalValues)}
      <div className={styles.container}>
        <Blocks match={match} />
        <Options />
      </div>
      <Modal {...modalValues} />
    </Fragment>
  );
};

export default Advertisements;
