import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal">{children}</div>
        </div>,
        modalRoot,
    );
};

Modal.defaultProps = {
    children: null,
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};



export default Modal;