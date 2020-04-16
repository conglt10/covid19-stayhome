import * as actions from 'actions/UI';

const initialState = {
  MenuKey: '1'
};

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MENUKEY:
      return {
        ...state,
        MenuKey: action.MenuKey
      };
    default:
      return state;
  }
};
export default UIReducer;