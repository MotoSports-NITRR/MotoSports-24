import React, { useEffect } from 'react';
import 'lord-icon-element';
import './popUpStyles.css';

const AlertScreen = ({ message, onClose, showAlert, type = 'error' }) => {
    useEffect(() => {
        import('lord-icon-element').then(module => {
            module.default.loadAnimation();
        });
    }, []);

    if (!showAlert) {
        return null;
    }

    const getTypeStyles = (type) => {
        switch (type) {
            case 'success':
                return { heading: 'Success!', color: '#28a745', icon: 'https://cdn.lordicon.com/lupuorrc.json' };
            case 'error':
            default:
                return { heading: 'Alert!', color: '#fc5050', icon: 'https://cdn.lordicon.com/tdrtiskw.json' };
        }
    };

    const { heading, color, icon } = getTypeStyles(type);

    return (
        <div className="alert-overlay">
            <div className="alert-popup">
                <lord-icon src={icon} trigger="loop" colors={`primary:${color}`} style={{ width: 50, height: 50 }} ></lord-icon>
                <div className="popup-heading" style={{ color }}>{heading}</div>
                <div className="alert-message">{message}</div>
                <button className="alert-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AlertScreen;