import React from 'react';
import PropTypes from 'prop-types';
import {Row} from './Row';

export const Spacer = ({height, colSpan}) => {
    return (
        <React.Fragment>
            <Row>
                <td height={height} colSpan={colSpan} style={{lineHeight: height+"px", fontSize: height}}>&nbsp;</td>
            </Row>
        </React.Fragment>
    );
};

Spacer.propTypes = {
    height: PropTypes.number.isRequired,
    colSpan: PropTypes.number
};