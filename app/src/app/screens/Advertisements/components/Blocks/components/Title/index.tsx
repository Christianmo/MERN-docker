import React, { FC, useState } from "react";

import styles from "./styles.module.scss";

interface TitleProps {
  tempId: number;
  properties: {
    value: string;
  };
  handleUpdateBlocks: (tempId: number, properties: object) => void;
}

const Title: FC<TitleProps> = ({ tempId, properties, handleUpdateBlocks }) => {
  const [editableStatus, setEditableStatus] = useState(false);
  
  function handleFocus() {
    setEditableStatus(true);
  }
  
  function handleBlur(e: any) {
    const value = e.target.innerText;
    const updatedProperties = { value };    
    handleUpdateBlocks(tempId, updatedProperties);
    setEditableStatus(false);
  }

  function handleKeyPress(e: any) {
    if (e.target.innerText.length > 80) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span
          className={styles.text}
          contentEditable={editableStatus}
          onClick={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex={0}
          suppressContentEditableWarning={true}
        >
          {properties.value}
        </span>
      </h1>
    </div>
  );
};

export default Title;
