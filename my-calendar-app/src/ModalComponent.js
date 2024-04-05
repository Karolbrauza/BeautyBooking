import React, { useState } from 'react';
import './modal.css'; // Custom CSS for the modal

const ModalContent = ({ selectedDate }) => {
    // State for tracking selected hour
    const [selectedHour, setSelectedHour] = useState(null);

    // Generate hour buttons 
    const hourButtons = [];
    for (let hour = 8; hour <= 17; hour++) {
        hourButtons.push(
            <button
                key={hour}
                className={selectedHour === hour ? 'active' : ''} // Conditional styling
                onClick={() => setSelectedHour(hour)} // Update state 
            >
                {hour}:00
            </button>
        );
    }

    return (
        <div className="modal-content">
            <div className="modal-header">
            <h2>Visit Date: {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</h2>
            </div>
            <>
                <div className="hour-buttons-container">
                    <div className="hour-row">
                        {hourButtons.slice(0, 5)}
                    </div>
                </div>
                <div className="hour-buttons-container">
                    <div className="hour-row">
                        {hourButtons.slice(5)}
                    </div>
                </div>
            </>
        </div>
    );
};

export default ModalContent;