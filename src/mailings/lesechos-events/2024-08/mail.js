import React from 'react';

import {Images} from '../../../stories/Images';
import {Table} from '../../../stories/Table';
import {Row} from '../../../stories/Row';
import {Column} from '../../../stories/Column';
import {Text} from '../../../stories/Text';
import {Button} from '../../../stories/Button';
import {Spacer} from '../../../stories/Spacer';

import logo from './images/logo-lesechos.png';
import logoLarge from './images/logo-large.png';
import logoToyota from './images/logo-toyota.png';
import separator from './images/separator.png';
import separatorSmall from './images/separator-small.png';
import cover from './images/cover.png';
import map from './images/map.png';

export const Bulgari_2024_03 = () => {
    const [user, setUser] = React.useState();

    const titleStyle = {
        fontFamily: 'Merriweather, Arial, sans-serif',
        fontSize: 42,
        lineHeight: '52px',
        fontWeight: 700,
    };

    const mediumT = {
        lineHeight: '26px',
        fontSize: '18px',
        fontFamily: 'Arial, Verdana, sans-serif',
        fontWeight: 'normal',
    };

    const largeT = {
        fontSize: 17,
        lineHeight: '25px',
        fontFamily: 'Arial, Verdana, sans-serif',
    };

    const smallT = {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.3,
        fonFamily: 'Helvetica Neue ,Helvetica,Arial,sans-serif',
        color: '#9B9B9B',
    };

    const buttonStyle = {
        fontSize: 16
    }

    return (
        <React.Fragment>
            <Table width={700} style={{backgroundColor: '#F4F4F4'}}>
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

            <Table width={700} style={{backgroundColor: '#F4F4F4'}}>
                <Row>
                    <Column style={{height: '50px'}}>&nbsp;</Column>
                </Row>
                <Row>
                    <Column width="500">
                        <Images src={logo} width={300} alt="Logo Les Echos" url={'https://google.fr'}/>
                    </Column>
                </Row>
                <Spacer height={20}></Spacer>
                <Row>
                    <Text style={titleStyle}>
                        x
                    </Text>
                </Row>
                <Spacer height={30}></Spacer>
                <Row>
                    <Column>
                        <Images src={logoToyota} width={205} alt="Logo Toyota" url={'https://google.fr'}/>
                    </Column>
                </Row>

                <Spacer height={50}></Spacer>

                <Row>
                    <Text style={titleStyle}>
                        La soir&#233;e Les Echos x Toyota<br className={'not-for-mobile'}/> au c&#339;ur des Jeux
                    </Text>
                </Row>

                <Spacer height={35}></Spacer>

                <Row>
                    <Column>
                        <Images src={separator} width={100} alt="------"/>
                    </Column>
                </Row>

                <Spacer height={35}></Spacer>

                <Row>
                    <Column>
                        <Table width={600} className={'small-padding'}>
                            <Row>
                                <Text style={mediumT}>
                                    Bonjour Pr&#233;nom,
                                    <br/><br/>
                                    En tant qu'abonn&#233;(e) Premium Entreprises, nous avons le plaisir de vous inviter &#224; une soir&#233;e VIP exclusive !
                                    <br/><br/>
                                    Nous vous donnons rendez-vous sur <strong>la Terrasse Toyota au Club France, situ&#233;e &#224; la Grande Halle de la Villette &#224; Paris, le vendredi 2 ao&#251;t &#224; partir de 18h.</strong>
                                    Cet espace embl&#233;matique accueille la plus grande fan zone durant les Jeux Olympiques et Paralympiques de Paris 2024.
                                    <br/><br/>
                                    La Terrasse Toyota met &#224; disposition des abonn&#233;s Premium Entreprises des places VIPs pour vous permettre de rencontrer des athl&#232;tes, de profiter d&#8217;un cocktail, et vivre une exp&#233;rience unique au c&#339;ur de cet &#233;v&#233;nement mondial.
                                    Pour participer, cliquez ICI OU sur le bouton ci-dessous et remplissez le formulaire.
                                    <br/><br/>
                                    Les invitations sont nominatives et personnelles, vous avez la possibilit&#233; de venir avec 1 invit&#233; pour qui vous devrez renseigner nom, pr&#233;nom et adresse email. Attention, les places sont limit&#233;es !
                                </Text>
                            </Row>
                        </Table>
                    </Column>
                </Row>

                <Spacer height={50}/>

                <Row>
                    <Column>
                        <Button style={buttonStyle} label={'Je participe'} url={'https://google.fr'} radius={true} bordered={false} color={'#B00005'} width={130} height={'40'}/>
                    </Column>
                </Row>

                <Spacer height={50}/>
            </Table>

            <Table width={770} style={{backgroundColor: '#FFFFFF'}}>
                <Spacer height={50}></Spacer>

                <Row>
                    <Column>
                        <Table width={641} className={'small-padding'}>
                            <Row>
                                <Column>
                                    <Images src={cover} width={641} alt="Image Cover" url={'https://google.fr'}/>
                                </Column>
                            </Row>

                            <Row>
                                <Column>
                                    <Table width={641} style={{backgroundColor: '#F4F4F4'}}>
                                        <Spacer height={50}></Spacer>

                                        <Row>
                                            <Text style={titleStyle}>
                                                Programme
                                            </Text>
                                        </Row>

                                        <Spacer height={35}></Spacer>

                                        <Row>
                                            <Column>
                                                <Images src={separator} width={100} alt="-----"/>
                                            </Column>
                                        </Row>

                                        <Spacer height={50}></Spacer>

                                        <Row>
                                            <Column>
                                                <Table width={400} style={{borderLeft: '2px solid #E63316', textAlign: 'left'}} className={'small-padding'}>
                                                    <Row>
                                                        <Column>
                                                            <Table width={'100%'}>
                                                                <Row>
                                                                    <Column width={20}>&nbsp;</Column>
                                                                    <Text style={{...mediumT, color: '#E63316', textAlign: 'left'}}>
                                                                        &bull;&nbsp;&nbsp;
                                                                    </Text>
                                                                    <Text style={{textAlign: 'left'}}>
                                                                        <strong style={{color: '#E63316'}}>
                                                                            18H00
                                                                        </strong>
                                                                    </Text>
                                                                </Row>

                                                                <Row>
                                                                    <Column width={40} colSpan={2}>&nbsp;</Column>
                                                                    <Text style={{mediumT, textAlign: 'left'}}>
                                                                        Ouverture de la soir&#233;e et accueil des invit&#233;s
                                                                    </Text>
                                                                </Row>

                                                                <Spacer height={10}></Spacer>

                                                                <Row>
                                                                    <Column width={20}>&nbsp;</Column>
                                                                    <Text style={{...mediumT, color: '#E63316', textAlign: 'left'}}>
                                                                        &bull;&nbsp;&nbsp;
                                                                    </Text>
                                                                    <Text style={{textAlign: 'left'}}>
                                                                        <strong style={{color: '#E63316'}}>
                                                                            18H30 - 21H00
                                                                        </strong>
                                                                    </Text>
                                                                </Row>

                                                                <Row>
                                                                    <Column width={40} colSpan={2}>&nbsp;</Column>
                                                                    <Text style={{mediumT, textAlign: 'left'}}>
                                                                        Retransmission des &#233;preuves sur &#233;crans g&#233;ants, ambiance musicale DJ set, interviews avec des personnalit&#233;s sportives, et cocktail d&#238;natoire
                                                                    </Text>
                                                                </Row>

                                                                <Spacer height={10}></Spacer>

                                                                <Row>
                                                                    <Column width={20}>&nbsp;</Column>
                                                                    <Text style={{...mediumT, color: '#E63316', textAlign: 'left'}}>
                                                                        &bull;&nbsp;&nbsp;
                                                                    </Text>
                                                                    <Text style={{textAlign: 'left'}}>
                                                                        <strong style={{color: '#E63316'}}>
                                                                            21H00 - 23H00
                                                                        </strong>
                                                                    </Text>
                                                                </Row>

                                                                <Row>
                                                                    <Column width={40} colSpan={2}>&nbsp;</Column>
                                                                    <Text style={{mediumT, textAlign: 'left'}}>
                                                                        C&#233;l&#233;bration des m&#233;daill&#233;s avec sc&#233;narisation
                                                                    </Text>
                                                                </Row>

                                                                <Spacer height={10}></Spacer>

                                                                <Row>
                                                                    <Column width={20}>&nbsp;</Column>
                                                                    <Text style={{...mediumT, color: '#E63316', textAlign: 'left'}}>
                                                                        &bull;&nbsp;&nbsp;
                                                                    </Text>
                                                                    <Text style={{textAlign: 'left'}}>
                                                                        <strong style={{color: '#E63316'}}>
                                                                            23H00 - 02H00
                                                                        </strong>
                                                                    </Text>
                                                                </Row>

                                                                <Row>
                                                                    <Column width={40} colSpan={2}>&nbsp;</Column>
                                                                    <Text style={{mediumT, textAlign: 'left'}}>
                                                                        Programmation musicale : Concerts et DJ set
                                                                    </Text>
                                                                </Row>
                                                            </Table>
                                                        </Column>
                                                    </Row>
                                                </Table>
                                            </Column>
                                        </Row>

                                        <Spacer height={50}></Spacer>

                                        <Row>
                                            <Column>
                                                <Button style={buttonStyle} label={'Je participe'} url={'https://google.fr'} radius={true} bordered={false} color={'#B00005'} width={130} height={'40'}/>
                                            </Column>
                                        </Row>

                                        <Spacer height={50}></Spacer>
                                    </Table>
                                </Column>
                            </Row>
                        </Table>
                    </Column>
                </Row>

                <Spacer height={50}></Spacer>

                <Row>
                    <Text style={titleStyle}>Acc&#232;s</Text>
                </Row>

                <Spacer height={50}></Spacer>

                <Row>
                    <Column>
                        <Table className={'small-padding'}>
                            <Row valign={'top'}>
                                <Column width={250} classname={'small-12'}>
                                    <Table align={'left'} classname={'small-12'}>
                                        <Row>
                                            <Column align={'left'}>
                                                <Images src={separatorSmall} width={60} alt="-----"/>
                                            </Column>
                                        </Row>

                                        <Spacer height={20}/>

                                        <Row>
                                            <Text style={{...largeT, textAlign: 'left'}}>
                                                <strong>M&#233;tro - RER</strong> <br/>
                                                Ligne 5 - Porte de Pantin <br/>
                                                Ligne 7 - Porte de la Villette <br/>
                                                RER E - Rosa Parks
                                            </Text>
                                        </Row>
                                    </Table>
                                </Column>

                                <Column width={60} classname={'small-12'}>&nbsp;</Column>

                                <Column width={250} classname={'small-12'}>
                                    <Table>
                                        <Row>
                                            <Column align={'left'}>
                                                <Images src={separatorSmall} width={60} alt="-----"/>
                                            </Column>
                                        </Row>

                                        <Spacer height={20}/>

                                        <Row>
                                            <Text style={{...largeT, textAlign: 'left'}}>
                                                <strong>Tramway</strong> <br/>
                                                Ligne 3b - Porte de Pantin, <br/>
                                                Ella Fitzgerald ou Porte de la Villette <br/>
                                            </Text>
                                        </Row>
                                    </Table>
                                </Column>
                            </Row>

                            <Spacer height={40} colSpan={3}></Spacer>

                            <Row valign={'top'}>
                                <Column width={250} classname={'small-12'}>
                                    <Table>
                                        <Row>
                                            <Column align={'left'}>
                                                <Images src={separatorSmall} width={60} alt="-----"/>
                                            </Column>
                                        </Row>

                                        <Spacer height={20}/>

                                        <Row>
                                            <Text style={{...largeT, textAlign: 'left'}}>
                                                <strong>Bus</strong> <br/>
                                                Lignes 75, 151 - Porte de Pantin <br/>
                                                Lignes 139, 150, 152 - Porte de la Villette
                                            </Text>
                                        </Row>
                                    </Table>
                                </Column>

                                <Column width={60} classname={'small-12'}>&nbsp;</Column>

                                <Column width={250} classname={'small-12'}>
                                    <Table>
                                        <Row>
                                            <Column align={'left'}>
                                                <Images src={separatorSmall} width={60} alt="-----"/>
                                            </Column>
                                        </Row>

                                        <Spacer height={20}/>

                                        <Row>
                                            <Text style={{...largeT, textAlign: 'left'}}>
                                                <strong>V&#233;lo</strong> <br/>
                                                Des places de parking v&#233;lo <br/>
                                                sont install&#233;es dans le parc de la Villette, <br/>
                                                &#224; proximit&#233; de l'entr&#233;e principale <br/>
                                                du Club France.
                                            </Text>
                                        </Row>
                                    </Table>
                                </Column>
                            </Row>

                            <Spacer height={50}></Spacer>

                        </Table>
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <Images src={map} width={459} alt="Carte de Paris"/>
                    </Column>
                </Row>

                <Row>
                    <Text style={mediumT}>
                        Nous esp&#233;rons pouvoir vous rencontrer lors cette soir&#233;e exceptionnelle&#160;!
                        <br/>
                        <br/>
                        L&#8217;&#233;quipe Premium Entreprises
                    </Text>
                </Row>

                <Spacer height={50}></Spacer>

                <Row>
                    <Column>
                        <Button style={buttonStyle} label={'Nous contacter par email'} url={'https://google.fr'} width={'300'} height={'50'} color={'#000000'} bordered={false} radius={true}></Button>
                    </Column>
                </Row>

                <Spacer height={50}/>
            </Table>

            <Table width={770} style={{backgroundColor: '#FFFFFF'}}>
                <Row>
                    <Column>
                        <Table>
                            <Row>
                                <Column align={'left'}>
                                    <Table style={{backgroundColor: '#B00005'}} width={641}>
                                        <Spacer height={10}/>
                                    </Table>

                                    <Spacer height={30}/>

                                    <Row>
                                        <Column align={'left'}>
                                            <Images src={logoLarge} width={360} alt="Les Echos - Prenez un temps d'avance" url={'https://lesechos.fr'}/>
                                        </Column>
                                    </Row>

                                </Column>
                            </Row>
                        </Table>
                    </Column>
                </Row>
                <Spacer height={50}/>

            </Table>

            <Table width={770} style={{backgroundColor: '#FFFFFF'}}>
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