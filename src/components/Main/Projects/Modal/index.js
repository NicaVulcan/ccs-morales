import React from "react";

const Modal = ({ onClose, project }) => {

    const { title, description, techs } = project;

    console.log(title, description, techs)

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <p>description</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
};

export default Modal;