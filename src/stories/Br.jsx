import React from 'react';
import PropTypes from 'prop-types';
import './br.css';

export const Br = ({responsive = true, className }) => {
    return (
        <br className={[responsive ? 'hide' : '', className].join(' ')}/>
    );
};