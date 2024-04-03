import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initial date

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <Calendar 
                onChange={handleDateChange} 
                value={selectedDate} 
            />
        </div>
    );
};

export default CalendarComponent;
