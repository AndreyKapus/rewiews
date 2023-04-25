import { useState } from "react";
import {AdForm, FormLabel, FormInput, FormButton} from './Form.styled'


const Form = ({onSubmit, closeModal}) => {
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
      setUserName('');
      setUserNumber('');
      setCompany('');
      setLink('');
      closeModal();
  };

  return (
    <div>
      <AdForm onSubmit={handleSubmit}>
        <FormLabel>Job vacancy
          <FormInput
              type="text"
              name="name"
              value={userName}
              onChange={handleChange}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
          />
        </FormLabel>

        <FormLabel>Company
          <FormInput
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
              required
          />
        </FormLabel>

        <FormLabel>Link
          <FormInput
              type="text"
              name="link"
              value={link}
              onChange={handleChange}
              required
          />
        </FormLabel>

        <FormLabel>Date
          <FormInput
              type="tel"
              name="number"
              value={userNumber}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </AdForm>
    </div>
  )
}

export default Form