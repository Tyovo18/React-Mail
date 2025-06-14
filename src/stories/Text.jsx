import React from 'react';
import './text.css';

const defaultStyle = {
    fontFamily: 'Arial, sans-serif',
    color: "black",
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 'normal'
}

export const Text = ({ children, size, style, colSpan }) => {
    const final_style = {...defaultStyle, ...style};

    return (
        <th className={size} style={final_style} align="center" colSpan={colSpan}>
        {children}
        </th>
    );
};