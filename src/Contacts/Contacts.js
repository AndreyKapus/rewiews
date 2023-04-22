import { ContactsHeader } from "./Contacts.styled";

const Contacts = ({contactsList, onDeleteContact}) => {

    return (
      <>
        <ContactsHeader>Contacts</ContactsHeader>
        <ol>
          {contactsList ? contactsList.map(({id, name, number, company, link}) => (
          <li key={id}>
            <p>Name: <span>{name}</span></p>
            <p>Date: <span>{number}</span></p>
            <p>company: <span>{company}</span></p>
            <a href={link}>link</a>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
          </li>)): <div>Not found</div>}
        </ol>
      </>
    )
  }
  
  export default Contacts;