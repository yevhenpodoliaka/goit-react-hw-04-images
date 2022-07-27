import  {useEffect} from 'react';
import { Overlay, ModalCard } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalEl = document.querySelector('#modal');
export default function Modal ({children, onClose}){


  // componentWillUnmountt() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }
  useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
  },[])
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

    return createPortal(
      <Overlay onClick={handleOverlayClick}>
        <ModalCard>{children}</ModalCard>
      </Overlay>,
      modalEl
    );
  }

Modal.propType = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
