import { ContactsHeader, ContactsListItem, ContactsList, ContactsBtn, ContactsLink, ContactsName, ContactsNameValue } from "./Contacts.styled";

const Contacts = ({contactsList, onDeleteContact}) => {

    return (
      <>
        <ContactsHeader>Contacts</ContactsHeader>
        <ContactsList>
          {contactsList ? contactsList.map(({id, name, number, company, link}) => (
          <ContactsListItem key={id}>
            <ContactsName>Name: <ContactsNameValue>{name}</ContactsNameValue></ContactsName>
            <ContactsName>Date: <ContactsNameValue>{number}</ContactsNameValue></ContactsName>
            <ContactsName>company: <ContactsNameValue>{company}</ContactsNameValue></ContactsName>
            <ContactsLink href={link} target="blanc">link</ContactsLink>
            <ContactsBtn type="button" onClick={() => onDeleteContact(id)}>x</ContactsBtn>
          </ContactsListItem>)): <div>Not found</div>}
        </ContactsList>
      </>
    )
  }
  
  export default Contacts;