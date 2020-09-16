import React, { Fragment, useState, DragEvent, FC } from "react";
import { TITLE, PARAGRAPH, IMAGE, GALLERY, VIDEO } from "constants/blockTypes";

import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Gallery from "./components/Gallery";
import Video from "./components/Video";

import {
  handleDragOver,
  handleDrop,
  handleDragLeave,
  getTempId
} from "./utils";
import { BlockProps, BlocksProps } from "types/app";

import styles from "./styles.module.scss";

const blocks = [
  {
    id: 1000,
    tempId: getTempId(),
    type: TITLE,
    properties: {
      value:
        "Cusco: Mujeres regalan almuerzos para los más necesitados durante la cuarentena"
    }
  },
  {
    id: 1001,
    tempId: getTempId(),
    type: PARAGRAPH,
    properties: {
      value:
        "Un seco de pollo, una buena sopa de chairo, revuelto de vainitas y hasta un lomo saltado son algunos de los platos de comida que preparan un grupo de mujeres del distrito de Santiago (región Cusco), para las personas que más necesitan durante esta emergencia."
    }
  },
  {
    id: 1002,
    tempId: getTempId(),
    type: IMAGE,
    properties: { src: "https://via.placeholder.com/800x600", alt: "Lorem" }
  },
  {
    id: 1003,
    tempId: getTempId(),
    type: GALLERY,
    properties: {
      images: [
        { src: "https://via.placeholder.com/266x200", alt: "Lorem" },
        { src: "https://via.placeholder.com/266x200", alt: "Lorem" },
        { src: "https://via.placeholder.com/266x200", alt: "Lorem" }
      ]
    }
  },
  {
    id: 1004,
    tempId: getTempId(),
    type: VIDEO,
    properties: { src: "https://www.youtube.com/embed/N73sDPuxKQI" }
  }
];

const Blocks: FC<BlocksProps> = () => {
  const [blocksState, setBlocksState] = useState<any>(blocks);

  const handleUpdateBlocks = (tempId: number, properties: object) => {
    const updatedBlock = blocksState.map((block: BlockProps) =>
      (block.tempId === tempId) ? { ...block, properties } : block
    );
    setBlocksState(updatedBlock);
  }

  const handleAddBlock = (index: number, newBlock: any) => {
    const tempId: number = getTempId();
    const updatedBlocks = blocksState.map((block: BlockProps) => ({
      ...block
    }));
    updatedBlocks.splice(index, 0, { ...newBlock, tempId });
    setBlocksState(updatedBlocks);
  }

  const handleDropAndUpdate = (e: DragEvent) => {
    handleDrop(e, handleAddBlock);
  }

  const renderBlock = (block: BlockProps, index: number) => {
    let currentBlock;

    const extraProps = {
      id: block.id,
      tempId: block.tempId,
      properties: block.properties,
      handleUpdateBlocks
    };

    switch (block.type) {
      case TITLE:
        currentBlock = <Title {...extraProps} />;
        break;
      case PARAGRAPH:
        currentBlock = <Paragraph {...extraProps} />;
        break;
      case IMAGE:
        currentBlock = <Image {...extraProps} />;
        break;
      case GALLERY:
        currentBlock = <Gallery id={block.id} properties={block.properties} />;
        break;
      case VIDEO:
        currentBlock = <Video id={block.id} properties={block.properties} />;
        break;
      default:
        return "";
    }

    return (
      <Fragment key={`${block.type}_${index}`}>
        <div className={styles.block}>{currentBlock}</div>
        <div
          className={styles.afterBlock}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDropAndUpdate}
          data-index={index}
        />
      </Fragment>
    );
  }

  return <div className={styles.container}>{blocksState.map(renderBlock)}</div>;
};

export default Blocks;
