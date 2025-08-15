import React, { useEffect } from 'react';
import './Modal.css';

const Modal = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeModal = () => {
    const modal = document.getElementById('messageModal');
    if (modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('message-modal')) {
      closeModal();
    }
  };

  return (
    <div id="messageModal" className="message-modal hidden" onClick={handleBackdropClick}>
      <div className="modal-backdrop"></div>
      <div className="modal-content">
        <div className="modal-header">
          <span id="modalIcon" className="modal-icon">✅</span>
          <h3 id="modalTitle">Success!</h3>
        </div>
        <p id="modalMessage">Your message has been sent successfully!</p>
        <button type="button" className="btn btn--primary" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
