import {useEffect, useState}  from 'react';
import Contacts from './Components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Container, AppWrapper } from './GlobalStyles/global.styled';
import NavBar from './Components/NavBar/NavBar'
import FormModal from './Components/Modal/Modal';

document.title = 'Rewiew App'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact')) ?? [];
  })
  const [filter, setFilter] = useState('');
  const [total, setTotal] = useState(0);

  const onSubmit = ({userName, userNumber, company, link}) => {
    const contact = {
      id: nanoid(),
      name: userName,
      number: userNumber,
      company: company,
      link: link,
    };

    const existingContact = contacts.find((el) => {
    return  el.name.toLowerCase() === contact.name.toLowerCase()
    });

    existingContact ? alert("Contact already exist") : setContacts([...contacts, contact]);
  };

  const filteredContactValue = (e) => {
    setFilter(e.target.value)
  };

  const findContacts = () => {
    const filteredContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.company.includes(filteredContact.toLowerCase())
    )
  };

  const deleteContact = (id) => {
    return setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id)
    })
  }

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contacts))
  }, [contacts]);

  useEffect(() => {
    setTotal(() => contacts.length)
  }, [contacts])

    return (
        <Container>
          <NavBar onChangeFilter={filteredContactValue}/>
          <AppWrapper>
            <FormModal onSubmit={onSubmit}/>
            {/* <Form onSubmit={onSubmit}/> */}
            <Contacts contactsList={findContacts()} onDeleteContact={deleteContact} total={total}/>
          </AppWrapper>
        </Container>
    );
  }

  export default App