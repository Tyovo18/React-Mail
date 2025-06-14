import React, {useEffect} from 'react';
import {Images} from './Images';

const background_img = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export const Background = ({ children, img, size, style, align = 'center', width = '100%'}) => {
    useEffect(() => {
        if (document.getElementById('hello')) {
            document.getElementById('bg').innerHTML = document.getElementById('hello').innerHTML;
            document.getElementById('hello').remove();
        }
    }, []);

    const bg = `
    <!--[if gte mso 9]>
<v:image xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block; width:'${width}'; height: auto;" src="images/background.png"/>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block;position: absolute; width: 700px; height:841px;">
<v:fill opacity="0%" color="#242D49"/>
<v:textbox inset=" 0,0,0,0">
<![endif]-->
<div id="bg">

</div>
<!--[if gte mso 9]>
</v:textbox>
</v:fill>
</v:rect>
</v:image>
<![endif]-->
`;

    return (
        <React.Fragment>
            <td align={align} style={{...style, ...background_img, backgroundImage: `url(${img})`}} dangerouslySetInnerHTML={{__html: bg}}>
            </td>
            <td style={{display: 'none'}}>
                <div id={'hello'}>{children}</div>
                <Images src={img} width={size} style={{display: 'none'}} classname={'for_archive'}/>
            </td>
        </React.Fragment>
    );
};

