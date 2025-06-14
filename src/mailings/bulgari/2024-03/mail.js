import React from 'react';

import {Images} from '../../../stories/Images';
import {Table} from '../../../stories/Table';
import {Row} from '../../../stories/Row';
import {Column} from '../../../stories/Column';
import {Text} from '../../../stories/Text';
import {Button} from '../../../stories/Button';
import {Spacer} from '../../../stories/Spacer';

import logo from './images/logo-bulgari.png';
import cover from './images/cover.jpg';
import img1 from './images/photo-01.jpg';
import img2 from './images/photo-02.jpg';

export const Bulgari_2024_03 = () => {
    const [user, setUser] = React.useState();

    const titleStyle = {
        fontSize: 30,
        lineHeight: '24px',
        fontWeight: 'bold',
    };

    const mediumT = {
        lineHeight: '24px',
        fontSize: '16px',
        fontFamily: 'Arial, Verdana, sans-serif',
        fontWeight: 'normal',
    };

    const smallT = {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.3,
        fonFamily: 'Helvetica Neue ,Helvetica,Arial,sans-serif',
        color: '#9B9B9B',
    };

    return (
        <React.Fragment>
            <Table width={700} style={{backgroundColor: '#FFFFFF'}}>
                <Row>
                    <Column>
                        <Table width={600}>
                            <Row>
                                <Column>
                                    &nbsp;
                                </Column>
                            </Row>
                            <Row>
                                <Text style={smallT}>Pour visualiser cet email, <a href="*|ARCHIVE|*" title="Si vous ne visualisez pas ce message" target="_blank" style={{color: '#9B9B9B'}}>
                                    <span>suivez ce lien</span></a>
                                </Text>
                            </Row>
                            <Row>
                                <Column style={{height: '20px'}}>
                                    &nbsp;
                                </Column>
                            </Row>
                        </Table>
                    </Column>
                </Row>
            </Table>
            
            <Table width={700} style={{backgroundColor: '#FFFFFF'}}>
                <Row>
                    <Column style={{height: '50px'}}>&nbsp;</Column>
                </Row>
                <Row>
                    <Column width="500">
                        <Images src={logo} width={250} alt="NSW" url={'https://google.fr'}/>
                    </Column>
                </Row>
                <Row>
                    <Column style={{height: '40px'}}>&nbsp;</Column>
                </Row>
                <Row>
                    <Column>
                        <Images src={cover} width={600} alt="NSW" url={'https://google.fr/'} mobile_full={true}/>
                    </Column>
                </Row>
                <Row>
                    <Column style={{height: '50px'}}>&nbsp;</Column>
                </Row>
                <Row>
                    <Column colSpan="3">
                        <Table>
                            <Row>
                                <Text style={titleStyle} colSpan="3">INVITATION</Text>
                            </Row>
                            <Row>
                                <Column style={{height: '50px'}} colSpan="3">&nbsp;</Column>
                            </Row>
                            <Row>
                                <Column>
                                    <Table width={600} className={'small-padding'}>
                                        <Text style={mediumT}>
                                            Bulgari a le plaisir de vous inviter &agrave; c&eacute;l&eacute;brer les f&ecirc;tes<br className={'not-for-mobile'}/> dans sa nouvelle boutique Place Vend&ocirc;me
                                            <br className={'not-for-mobile'}/>
                                            autour d'un cocktail et d'animations.
                                        </Text>
                                    </Table>
                                </Column>
                            </Row>

                            <Spacer height={50}/>
                            
                            <Row>
                                <Text colSpan={3}>
                                    <strong style={{fontSize: '20px', lineHeight: '28px', margin: '0'}}>Vendredi 3 D&eacute;cembre</strong>
                                    <br/>

                                    De 11h &#224; 18h

                                    <br/>
                                    <br/>

                                    Bulgari<br/>23-25 Place Vend&#244;me<br/>75001 Paris

                                    <br/>
                                    <br/>

                                    <Button label={'Comment s\'y rendre'} url={'https://google.com/'} radius={true}/>

                                    <br/><br/>
                                    <Button label={'Comment s\'y rendre'} url={'https://google.com/'} color={'red'}/>
                                </Text>
                            </Row>

                            <Spacer height={40}/>

                            <Row>
                                <Column colSpan="3">
                                    <Table>
                                        <Row>
                                            <Column colSpan="5" style={{height: '50px'}}>&nbsp;</Column>
                                        </Row>
                                        <Row>
                                            <Column style={{lineHeight: 0}}>
                                                <Images src={img1} width={280} mobile_full={true}/>
                                                <Images src={img2} width={280} mobile_full={true}/>
                                            </Column>
                                        </Row>

                                        <Spacer height={50}/>
                                    </Table>
                                </Column>
                            </Row>
                        </Table>
                    </Column>
                </Row>
            </Table>

            <Table width={700} style={{backgroundColor: '#FFFFFF'}}>
                <Row>
                    <Column>
                        <Table>
                            <Row>
                                <Column style={{width: '50px'}}>&nbsp;</Column>
                                <Text style={{fontSize: '12px', color: '#9aa2b1', fontWeight: '400', lineHeight: '20px'}}>
                                    Pour mettre à jour vos préférences e-mail ou vous désinscrire, <a href="*|UNSUB|*" target="_blank" style={{color: '#9aa2b1'}}>cliquez-ici</a>.
                                    <br/>
                                    Pour recevoir les e-mails dans votre boîte de réception principale (et non dans les e-mails promotionnels ou les indésirables), merci d'ajouter
                                    <a href="mailto:bulgari@communication-bulgari.com" style={{color: '#9aa2b1'}}> bulgari@communication-bulgari.com</a> à votre carnet d'adresses. Merci de ne pas répondre à ce message. Choisissez ici votre moyen de communication souhaité.
                                    <br/>
                                    Privacy policy | Bulgari S.p.a. Via dei condotti 11 - 00187 Rome, IT - © Bulgari 2021
                                    <br/><br/>
                                    *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*
                                </Text>
                                <Column style={{width: '50px'}}>&nbsp;</Column>
                            </Row>
                            <Row>
                                <Column colSpan="3" style={{height: '50px'}}>&nbsp;</Column>
                            </Row>
                        </Table>
                    </Column>
                </Row>
            </Table>
        </React.Fragment>

    );

};

export default <Bulgari_2024_03/>;