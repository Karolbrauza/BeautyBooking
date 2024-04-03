import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './modal.css'; // Custom CSS for the modal
import ModalComponent from './ModalComponent'; // Import your Modal Component

const CalendarComponent = () => {
    const [showModal, setShowModal] = useState(false); // [1]
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initial date

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowModal(true); // [2]
        console.log('showModal', showModal)
    };

    return (
        <div>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
            />

            {/* Simplified Modal - Customize based on your library/setup */}
            {showModal && (
                <ModalComponent
                    onClose={() => setShowModal(false)}
                    selectedDate={selectedDate}
                />)}
        </div>
    );
};

export default CalendarComponent;
