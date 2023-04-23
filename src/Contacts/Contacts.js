import { ContactsHeader, ContactsListItem, ContactsList } from "./Contacts.styled";

const Contacts = ({contactsList, onDeleteContact}) => {

    return (
      <>
        <ContactsHeader>Contacts</ContactsHeader>
        <ContactsList>
          {contactsList ? contactsList.map(({id, name, number, company, link}) => (
          <ContactsListItem key={id}>
            <p>Name: <span>{name}</span></p>
            <p>Date: <span>{number}</span></p>
            <p>company: <span>{company}</span></p>
            <a href={link}>link</a>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
          </ContactsListItem>)): <div>Not found</div>}
        </ContactsList>
      </>
    )
  }
  
  export default Contacts;