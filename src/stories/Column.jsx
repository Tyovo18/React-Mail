import React from 'react';



export const Column = ({ children, classname, style, align = 'center', colSpan, width }) => {
    
    return (
        <th className={classname} align={align} style={style} colSpan={colSpan} width={width}>
            {children}
        </th>
    );
};

