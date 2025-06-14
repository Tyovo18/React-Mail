import React from 'react';
import image from '../image.png';
import './footer.css';

export const Footer = () => {
    return (
    <footer className='storybook-footer'>
        <img src={image} width='10%' height='10%' alt='logo'/>
        <h1>Emi REACT  \(°o°)/</h1>
        
    </footer>
    );
};

