import React from "react";
import "./Modal.css";
const Modal = ({ setModalOpen, children, title }) => {
  return (
    <div className="modal-overlay h-full w-full flex-1 flex items-center justify-center">
      <div className="modal-wrapper">
        <div className="modal h-full rounded-2xl p-6 bg-white">
          <div className="flex justify-between text-xl text-black ">
            <p>{title}</p>
            <p onClick={() => setModalOpen(false)} className="cursor-pointer">
              X
            </p>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
