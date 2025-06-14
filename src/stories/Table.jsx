import React from 'react';

const table_style = {
    margin: '0 auto',
    borderSpacing: 0,
    borderCollapse: 'collapse'
};

export const Table = ({ children , style, width, responsive = true, align = 'center', className }) => {
    return (
        <table align={align} border="0" cellPadding="0" cellSpacing="0" width={width} className={[responsive ? 'w640' : '', className].join(' ')}
               style={{...table_style, ...style}}>
            <tbody>
            {children}
            </tbody>
        </table>
    );
};
