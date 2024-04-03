import React from 'react';
import  CalendarComponent from './CalendarComponent'; 

function App() {
    return (
        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <h1 style={{ textAlign: 'center' }}>BeautyBooking</h1>
                <CalendarComponent />
            </div>
        </div>
    );
}

export default App;
