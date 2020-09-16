import { SET_MODAL } from "constants/actionNames";

const initialState = {
  modalValues: {
    component: null,
    isVisible: false,
    size: "sm"
  }
};

const appReducer = (
  state = initialState,
  action: { type: string; payload: object }
) => {
  console.log(state, action);
  switch (action.type) {
    case SET_MODAL:
      return { ...state, modalValues: action.payload };
    default:
      return state;
  }
};

export default appReducer;
