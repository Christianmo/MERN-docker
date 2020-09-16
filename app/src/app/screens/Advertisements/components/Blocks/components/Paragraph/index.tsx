import React, { FC, useState } from 'react';

import styles from './styles.module.scss';

interface ParagraphProps {
  tempId: number;
  properties: {
    value: string;
  };
  handleUpdateBlocks: (tempId: number, properties: object) => void;
}

const Paragraph: FC<ParagraphProps> = ({ tempId, properties, handleUpdateBlocks }) => {
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

  return (
    <div
      className={styles.paragraph}
      contentEditable={editableStatus}
      onClick={handleFocus}
      onBlur={handleBlur}
      role="button"
      tabIndex={0}
      suppressContentEditableWarning={true}      
    >
      {properties.value}

    </div>
  );
}

export default Paragraph;
