import PropTypes from 'prop-types';
import { ContactStyle, BtnDelete } from './ContactItem.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ContactItem = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <ContactStyle key={id}>
        {name}: {number}
        <BtnDelete type="button" onClick={() => onDelete(id, name)}>
          <RiDeleteBin6Line
            style={{ width: '16px', height: '16px', fill: 'white' }}
          />
        </BtnDelete>
      </ContactStyle>
    );
  });
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
