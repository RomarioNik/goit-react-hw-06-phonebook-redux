import { FILTER_CHANGE, FILTER_RESET } from './constants';

const initialState = {
  value: '',
};

export const filterReduser = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGE:
      return {
        ...state,
        value: action.payload,
      };

    case FILTER_RESET:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};
