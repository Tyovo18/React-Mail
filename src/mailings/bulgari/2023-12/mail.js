
import React from 'react';
import { Images } from '../../../stories/Images';
import { Table } from '../../../stories/Table';
import { Row } from '../../../stories/Row';
import { Column } from '../../../stories/Column';
import { Text } from '../../../stories/Text';
import { Br } from '../../../stories/Br';

import logo from './images/logo-bulgari.png';
import cover from './images/cover.jpg';
import cta from './images/cta.jpg';
import img1 from './images/photo-01.jpg';
import img2 from './images/photo-02.jpg';

import '../../../stories/text.css';

export const Bulgari_2024_03 = () => {
    const [user, setUser] = React.useState();

    const titleStyle = {
        fontSize: 30,
        color: 'black',
        lineHeight: '24px',
        fontWeight: 'bold'

    };

    const maxW = {
        maxWidth: "700px",
        margin: "0 auto"

    };


    const mediumT = {
        lineHeight: '24px',
        fontSize: '16px',
        fontFamily: 'Arial, Verdana, sans-serif',
        fontWeight: 'normal'
    };



    const smallT = {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.3,
        fonFamily: 'Helvetica Neue ,Helvetica,Arial,sans-serif',
        color: '#9B9B9B'
    };



    return (
        <Table style={maxW}>
            <Table style={maxW}>
                <Row>
                    <Text>
                        <Table style={maxW}>
                            <Row>
                                <Column>
                                    &nbsp;
                                </Column>
                            </Row>
                            <Row>
                                <Column style={smallT}>Pour visualiser cet email, <a href="*|ARCHIVE|*" title="Si vous ne visualisez pas ce message" target="_blank" style={{color: '#9B9B9B'}}>
                                    <span>suivez ce lien</span></a>
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{height:"20px"}} >
                                    &nbsp;
                                </Column>
                            </Row>
                        </Table>
                    </Text>
                </Row>
            </Table>
            <Table style={maxW}>
                <Row>
                    <Column colSpan="3" style={{height:"50px"}}>&nbsp;</Column>
                </Row>
                <Row>
                    <Column colSpan="3" width="500">
                        <img src={logo} width="250" height="auto" alt="NSW"/>
                    </Column>
                </Row>
                <Row>
                    <Column colSpan="3" style={{height:"40px"}}>&nbsp;</Column>
                </Row>
                <Row>
                    <Column width="50" >&nbsp;</Column>
                    <Column  style={{height:"40px"}}>
                        <img src={cover} width="600" height="auto" alt="NSW"/>
                    </Column>
                    <Column width="50" >&nbsp;</Column>
                </Row>
                <Row>
                    <Column colSpan="3" style={{height:"50px"}}>&nbsp;</Column>
                </Row>
                <Row>
                    <Column colSpan="3">
                        <Table style={maxW}>
                            <Row>
                                <Text style={titleStyle} colSpan="3">INVITATION</Text>
                            </Row>
                            <Row>
                                <Column style={{height:"50px"}} colSpan="3">&nbsp;</Column>
                            </Row>
                            <Row>
                                <Column></Column>
                                <Column style={mediumT}>
                                    Bulgari a le plaisir de vous inviter &agrave; c&eacute;l&eacute;brer les f&ecirc;tes<Br/> dans sa nouvelle boutique Place Vend&ocirc;me<Br/> autour d'un cocktail et d'animations.<br/><br/><br/>
                                </Column>
                                <Column></Column>
                            </Row>
                            <Row>
                                <Column colSpan={3}>
                                    <p style={{fontSize: '20px', lineHeight: '28px', margin: '0'}}><strong>Vendredi 3 D&eacute;cembre</strong> <br/>De 11h &#224; 18h</p>
                                    <br/>
                                    <p style={{fontSize: '16px', lineHeight: '24px'}}>Bulgari<br/>23-25 Place Vend&#244;me<br/>75001 Paris</p>
                                    <br/>
                                    <img src={cta} width="180" alt="Comment s'y rendre"/>
                                </Column>
                            </Row>
                            <Row>
                                <Column colSpan="3">
                                    <Table style={maxW}>
                                        <Row>
                                            <Column colSpan="5" style={{height:"50px"}}>&nbsp;</Column>
                                        </Row>
                                        <Row>
                                            <Images sm="small1" style={{height:"50px", margin: "0", width:"50px" }}>&nbsp;</Images>
                                            <Images sm="small12" width="280"><img src={img1} width="280" alt="Bulgari"/></Images>
                                            <Images sm="small1" style={{height:"50px", margin: "0", width:"50px" }}>&nbsp;</Images>
                                            <Images sm="small12" width="280"><img src={img2} width="280" alt="Bulgari"/></Images>
                                            <Images sm="small1" style={{height:"50px", margin: "0", width:"50px" }}>&nbsp;</Images>
                                        </Row>
                                        <Row>
                                            <Column colSpan="5" style={{height:"50px"}}>&nbsp;</Column>
                                        </Row>
                                    </Table>
                                </Column>
                            </Row>


                        </Table>
                    </Column>
                </Row>
                <Row>
                    <Column colSpan="3" style={{height:"50px"}}>&nbsp;</Column>
                </Row>
            </Table>
            <Table style={maxW}>
                <Row>
                    <Column>
                        <Table style={maxW}>
                            <Row>
                                <Column style={{width:"50px"}}>&nbsp;</Column>
                                <Column>
                                    <p style={{fontSize: "12px", color: "#9aa2b1", fontWeight: "400", lineHeight: "20px"}}>Pour mettre à jour vos préférences e-mail ou vous désinscrire, <a href="*|UNSUB|*" target="_blank" style={{color: "#9aa2b1"}}>cliquez-ici</a>.
                                        <br/>
                                        Pour recevoir les e-mails dans votre boîte de réception principale (et non dans les e-mails promotionnels ou les indésirables), merci d'ajouter
                                        <a href="mailto:bulgari@communication-bulgari.com" style={{color: "#9aa2b1"}}> bulgari@communication-bulgari.com</a> à votre carnet d'adresses. Merci de ne pas répondre à ce message. Choisissez ici votre moyen de communication souhaité.
                                        <br/>
                                        Privacy policy | Bulgari S.p.a. Via dei condotti 11 - 00187 Rome, IT - © Bulgari 2021
                                        <br/><br/>
                                        *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*
                                    </p>
                                </Column>
                                <Column style={{width:"50px"}}>&nbsp;</Column>
                            </Row>
                            <Row>
                                <Column colSpan="3" style={{height:"50px"}}>&nbsp;</Column>
                            </Row>
                        </Table>
                    </Column>
                </Row>
            </Table>

        </Table>

    );

};


export default <Bulgari_2024_03/>;