import React from 'react';
import './Thankyou.module.css'; // Import the CSS file

const Thankyou = () => {
    return (
        <div className="thank-you-container">
            <h1 className="thank-you-title">Thank You!</h1>
            <p className="thank-you-message">Your data has been added successfully.</p>
            <button className="thank-you-button" onClick={() => window.location.href='/'}>Go to Home</button>
        </div>
    );
}

export default Thankyou;
