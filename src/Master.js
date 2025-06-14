import React from 'react';

import Archive from './Archive';

export const Master = ({children}) => {
    return (
        <React.Fragment>
            {children}

            <Archive/>
        </React.Fragment>
    )
}