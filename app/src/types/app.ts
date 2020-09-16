export default interface AdvertisementsProps {
  match: object,
};

export interface BlockProps {
  id: number;
  tempId: number;
  type: string;
  properties: any;
}

export interface BlocksProps {
  match: object
}

// Common
export interface ModalProps {
  isVisible: boolean;
  size: string;
  component?: any;
}