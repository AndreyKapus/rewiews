import { useState } from 'react';
import Modal from 'react-modal';
import Form from '../Form/Form';
import {OpenModalBtn, customStyles, ModalWrapper} from './Modal.styled'

  Modal.setAppElement('body');

 const FormModal = ({onSubmit}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <ModalWrapper>
        <OpenModalBtn onClick={openModal}>Add</OpenModalBtn>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <Form onSubmit={onSubmit} closeModal={closeModal}/>
          <form>
          </form>
        </Modal>
      </ModalWrapper>
    );
  };

  export default FormModal;