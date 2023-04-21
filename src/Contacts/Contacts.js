import { ContactsHeader } from "./Contacts.styled";

const Contacts = ({contactsList, onDeleteContact}) => {

    return (
      <>
        <ContactsHeader>Contacts</ContactsHeader>
        <ol>
          {contactsList ? contactsList.map(({id, name, number, company, link}) => (
          <li key={id}>
            <p>Name: {name}, Date: {number}</p>
            <p>company: {company}</p>
            <a href={link}>link</a>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
          </li>)): <div>Not found</div>}
        </ol>
      </>
    )
  }
  
  export default Contacts;