import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {Table} from './Table';
import {Row} from './Row';
import {Text} from './Text';
import {Spacer} from './Spacer';

const defaultButton = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000000',
    color: '#FFFFFF'
}

export const Button = ({label, url, width = 200, height = 45, color = '#000000', radius, bordered = true, style}) => {
    defaultButton.backgroundColor = color;

    Object.keys(style).map(item => {
        defaultButton[item] = style[item]
    })

    const button = `
<!--[if mso]>
<table cellpadding="0" cellspacing="0" border="0" width="${width}"><tr><td style="text-align: center;"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:${height}px; width:${width}px; v-text-anchor:middle;" arcsize="96%" fillcolor="${bordered ? '' : color}" strokeweight="${bordered ? '0.75pt' : '0'}" strokecolor="${color}">${bordered ? '<v:stroke dashstyle="solid" />' : ''}<v:textbox inset="0,0,0,0"><center style="color:${color} font-family:${defaultButton.fontFamily} font-size:${defaultButton.fontSize ?? '14'}px"><![endif]-->
    <a href="${url}" class="arc-link" style="text-decoration: none;" target="_blank">
        <div class="button-container" style="font-family: ${defaultButton.fontFamily}; width: ${width}px; text-align: center; margin: auto; max-width: 100%; display: inline-block; border: ${bordered ? '1px solid '+color : ''}; border-radius: ${radius ? height : '0'}px; height: ${height}px; line-height: ${height}px; font-weight: bold; background-color: ${bordered ? 'transparent' : color};">
            <strong style="font-family: ${defaultButton.fontFamily || 'Arial, sans-serif'};color: ${bordered ? color : '#FFFFFF'}; font-size: ${defaultButton.fontSize || '14'}px;">${label}</strong>
        </div>
    </a>
<!--[if mso]></center></v:textbox>${bordered ? '</v:stroke>' : ''}</v:roundrect></td></tr></table><![endif]-->
`;


    return (
        <React.Fragment>
            {
                radius ?
                    <div dangerouslySetInnerHTML={{__html: button}}></div>
                    :
                    <a href={url} target={'_blank'} style={{textDecoration: 'none', color: '#000000'}}>
                        <Table width={width} style={defaultButton} responsive={false}>
                            <Spacer height={10}></Spacer>
                            <Row>
                                <Text style={defaultButton}>
                                    {label}
                                </Text>
                            </Row>
                            <Spacer height={10}></Spacer>
                        </Table>
                    </a>

            }
        </React.Fragment>
    );
};

Button.propTypes = {
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    url: PropTypes.string.isRequired,
};