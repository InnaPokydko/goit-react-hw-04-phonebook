import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Contacts>
      <ContactItem contacts={contacts} onDelete={onDelete} />
    </Contacts>
  );
};

export default ContactList;

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
