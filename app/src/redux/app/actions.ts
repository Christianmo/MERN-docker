import { SET_MODAL } from 'constants/actionNames';
import { ModalProps } from 'types/actions';

const appActions = {
  setModal: (payload: ModalProps) => ({
    type: SET_MODAL,
    payload
  })
}

export default appActions;