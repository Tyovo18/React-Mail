import React from 'react';
import PropTypes from 'prop-types';
import './images.css';

const styleImage = {
    msInterpolationMode: 'bicubic',
    clear: 'both',
    display: 'block',
    maxWidth: '100%',
    outline: 0,
    textDecoration: 'none'
}

export const Images = ({ src, width, alt, url, style, mobile_full, classname }) => {
    let finalStyle = {...styleImage};
    if (style) {
        Object.keys(style).map(key => {
            finalStyle[key] = style[key]
        });
    };


    return (
        url ?
            <a href={url} target={'_blank'} style={{textDecoration: 'none', color: '#000000'}}>
                <img src={src} width={width} height="auto" alt={alt} style={finalStyle} className={mobile_full ? 'w640' : ''}/>
            </a>
            :
            <img src={src} width={width} height="auto" alt={alt} style={finalStyle} className={[mobile_full ? 'w640' : '', classname ?? ''].join(' ')}/>
    );
};

Images.propTypes = {
    sm: PropTypes.oneOf(['small1','small12']),
};

