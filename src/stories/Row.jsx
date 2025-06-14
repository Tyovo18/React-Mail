import React from 'react';
import './row.css';

export const Row = ({ children, valign }) => {
    return (
        <tr valign={valign}>
        {children}
        </tr>
    );
};