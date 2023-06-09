import { nanoid } from 'nanoid';
import {
  CONTACT_ADD,
  CONTACT_DELETE,
  FILTER_CHANGE,
  FILTER_RESET,
} from './constants';

export const addContact = ({ name, number }) => {
  return {
    type: CONTACT_ADD,
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: CONTACT_DELETE,
    payload: id,
  };
};

export const filterChange = value => {
  return {
    type: FILTER_CHANGE,
    payload: value,
  };
};

export const filterReset = () => {
  return {
    type: FILTER_RESET,
    payload: '',
  };
};
