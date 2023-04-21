import { useState } from "react"


const Form = ({onSubmit}) => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [company, setCompany] = useState('');
  const [link, setLink] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {
      case 'name':
        setUserName(value);
        break;

      case 'number':
        setUserNumber(value);
        break;

      case 'company':
        setCompany(value);
        break;

      case 'link':
        setLink(value);
        break;

      default: return;
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({userName, userNumber, company, link});

  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
              type="text"
              name="name"
              onChange={handleChange}

              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
          />Job vacancy
        </label>

        <label>
          <input
              type="text"
              name="company"
              onChange={handleChange}
              required
          />Company
        </label>

        <label>
          <input
              type="text"
              name="link"
              onChange={handleChange}
              required
          />Link
        </label>

        <label>
          <input
              type="tel"
              name="number"
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
          />Date
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  )
}

export default Form