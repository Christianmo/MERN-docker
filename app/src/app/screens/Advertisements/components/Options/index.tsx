import React from 'react';
import { TITLE, PARAGRAPH, IMAGE, VIDEO, GALLERY } from 'constants/blockTypes';

import styles from './styles.module.scss';

const defaultValues: any = {
  [TITLE]: {
    type: TITLE,
    properties: { 
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    }
  },
  [PARAGRAPH]: {
    type: PARAGRAPH,
    properties: {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  },
  [IMAGE]: {
    type: IMAGE,
    properties: { 
      src:'https://via.placeholder.com/800x600', alt: 'Lorem ipsum',
    }
  },
  [GALLERY]: {
    type: GALLERY,
    properties: { 
      images: [{ src:'https://via.placeholder.com/266x200', alt: 'Lorem ipsum' }, { src:'https://via.placeholder.com/266x200', alt: 'Lorem ipsum' }, { src:'https://via.placeholder.com/266x200', alt: 'Lorem ipsum' }],
    }
  },  
  [VIDEO]: {
    type: VIDEO,
    properties: { 
      src:'https://www.youtube.com/embed/N73sDPuxKQI',
    }
  },
};

function Options() {
  function hadnleDragStart(e: any) {
    const { optionType } = e.currentTarget.dataset;
    e.dataTransfer.setData('text/plain', JSON.stringify(defaultValues[optionType]));
  }

  return (
    <div className={styles.container}>
      <div className={styles.option}>
        <button data-option-type={TITLE} className={styles.optionType} onDragStart={hadnleDragStart} draggable="true">
          <span className={styles.icon}><i className="fa fa-header" aria-hidden="true" /></span>
          <span>Title</span>
        </button>
      </div>
      <div className={styles.option}>
        <button data-option-type={PARAGRAPH} className={styles.optionType} onDragStart={hadnleDragStart} draggable="true">
          <span className={styles.icon}><i className="fa fa-paragraph" aria-hidden="true" /></span>
          <span>Paragraph</span>
        </button>
      </div>
      <div className={styles.option}>
        <button data-option-type={IMAGE} className={styles.optionType} onDragStart={hadnleDragStart} draggable="true">
          <span className={styles.icon}><i className="fa fa-picture-o" aria-hidden="true" /></span>
          <span>Image</span>
        </button>
      </div>
      <div className={styles.option}>
        <button data-option-type={VIDEO} className={styles.optionType} onDragStart={hadnleDragStart} draggable="true">
          <span className={styles.icon}><i className="fa fa-picture-o" aria-hidden="true" /></span>
          <span>Video</span>
        </button>
      </div>
      <div className={styles.option}>
        <button data-option-type={GALLERY} className={styles.optionType} onDragStart={hadnleDragStart} draggable="true">
          <span className={styles.icon}><i className="fa fa-th-large" aria-hidden="true" /></span>
          <span>Gallery</span>
        </button>
      </div>
    </div>
  );
}

export default Options;


