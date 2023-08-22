import React, { Component } from 'react';
function FancyBorder({ children, color }) {
    return (
        <div style={{ color: color, backgroundColor: 'grey' }} >
            {children}
        </div>
    );
}

export default function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

//FancyBorder  Child
//WelcomeDialog Parent 