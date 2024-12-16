import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h2>Are you sure you want to delete this contact?</h2>
    <button onClick={onConfirm}>Yes</button>
    <button onClick={onRequestClose}>No</button>
  </Modal>
);

export default DeleteConfirmationModal;
