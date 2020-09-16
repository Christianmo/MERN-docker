import { FC } from 'react';

export interface ModalProps {
  isVisible: boolean;
  size: string;
  component: () => any;
}