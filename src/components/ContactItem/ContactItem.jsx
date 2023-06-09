import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

import {
  ListItem,
  AvatarWrapper,
  TrashButton,
  Avatar,
  Contact,
  Name,
  Phone,
  IconTrash,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>

      <Contact>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
      </Contact>

      <TrashButton onClick={() => dispatch(deleteContact(id))}>
        <IconTrash />
      </TrashButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
