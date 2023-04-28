import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';

export default function App() {
  const contactName = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(contactName);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isContactExist = contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (isContactExist) {
      alert(`${newContact.name} is already in contact`);
    } else {
      const contactWithId = { ...newContact, id: nanoid() };
      setContacts(prevState => [...prevState, contactWithId]);
    }
  };

  const [filter, setFilter] = useState('');
  
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContactList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <SecondTitle>Contacts</SecondTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContactList()} onDelete={deleteContact} />
    </Container>
  );
}

