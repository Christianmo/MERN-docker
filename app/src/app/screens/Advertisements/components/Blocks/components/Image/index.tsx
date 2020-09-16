import React, { FC } from "react";
import Tools from "../Tools";

import styles from "./styles.module.scss";

interface Props {
  tempId: number;
  properties: {
    src: string;
    alt: string;
  };
  handleUpdateBlocks: (tempId: number, properties: object) => void;
}

const Image: FC<Props> = ({ tempId, properties, handleUpdateBlocks }) => {
  const reader = new FileReader();

  reader.onloadend = () => {
    const src = reader.result as string;
    const updatedProperties = { src };
    handleUpdateBlocks(tempId, updatedProperties);
  };

  const handleSelectImage = (e: any) => {
    const blob = e.currentTarget.files[0];

    if (!blob) return;
    reader.readAsDataURL(blob);
  };

  return (
    <div className={styles.container}>
      <img src={properties.src} alt={properties.alt} />
      <Tools>
        <input
          type="file"
          onChange={handleSelectImage}
          className={styles.hide}
        />
      </Tools>
    </div>
  );
};

export default Image;
