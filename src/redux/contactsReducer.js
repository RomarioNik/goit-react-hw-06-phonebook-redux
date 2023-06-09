import { CONTACT_ADD, CONTACT_DELETE } from './constants';

const initialState = [];

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_ADD:
      return [...state, action.payload];

    case CONTACT_DELETE:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};
