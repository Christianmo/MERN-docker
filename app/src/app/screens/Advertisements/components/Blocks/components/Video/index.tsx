import React, { FC } from "react";
import { useDispatch } from "react-redux";
import appActions from "redux/app/actions";
import { ModalProps } from "types/app";
import Tools from "../Tools";

import styles from "./styles.module.scss";

interface VideoProps {
  id: number;
  properties: {
    src: string;
  };
}

const Video: FC<VideoProps> = ({ id, properties }) => {
  const dispatch = useDispatch();

  const handleSelectVideo = () => {
    const modalValues = {
      isVisible: true,
      size: "sm",
      component: () => (<div>XD</div>),
    }

    dispatch(appActions.setModal( modalValues ));
  };

  return (
    <div className={styles.container}>
      <iframe
        width="560"
        height="315"
        src={`${properties.src}?controls=0`}
        title="video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <Tools handleEdit={handleSelectVideo}></Tools>
    </div>
  );
};

export default Video;
