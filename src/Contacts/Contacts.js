const Contacts = ({contactsList, onDeleteContact}) => {

    return (
      <>
        <h1>Contacts</h1>
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