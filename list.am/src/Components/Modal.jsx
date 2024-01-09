import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center ">
      <div className="modal-content bg-white w-1/2 rounded-lg shadow-lg p-6 bg-[#343541]">
       
        <div className="modal-body">
          {children}
        
        </div>
      </div>
    </div>
  );
};

export default Modal;
