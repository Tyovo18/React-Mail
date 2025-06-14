import React from 'react';

import {Images} from '../../../stories/Images';
import {Table} from '../../../stories/Table';
import {Row} from '../../../stories/Row';
import {Column} from '../../../stories/Column';
import {Text} from '../../../stories/Text';
import {Background} from '../../../stories/Background';
import {Spacer} from '../../../stories/Spacer';
import {Br} from '../../../stories/Br';

import background from './images/background.png';
import logo from './images/logo-boursier.png';
import pastille from './images/pastilles.png';
import bouton from './images/cta.png';
import mail from './images/picto-mail.png';
import alert from './images/picto-alert.png';
import wallet from './images/picto-wallet.png';
import letter from './images/picto-letter.png';
import puce from './images/puce.png';
import separator from './images/separator.png';
import info from './images/picto-info.png';

export const Boursier_2024 = () => {
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
        fontSize: 16,
    };

    return (
        <React.Fragment>
            {/* HEADER SECTION */}
            <Table width={700} style={{BackgroundColor: '#FFFFFF'}}>
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
            {/* HEADER SECTION */}

            {/* OFFER SECTION */}
            <Table width={700} style={{backgroundColor: '#FFFFFF'}}>
                <Row>
                    <Column>
                        <Table width={700} style={{backgroundColor: '#242D49'}}>
                            <Row>
                                <Column>
                                    <Table width={700}>
                                        <Row>
                                            <Column>
                                                <Table width={700} role="presentation">
                                                    <Row>
                                                        <Background img={background} style={{backgroundPosition: 'bottom'}} size={700}>
                                                            <Table width={550} className={'small-padding'}>
                                                                <Spacer height={40}/>
                                                                <Row>
                                                                    <Column>
                                                                        <center>
                                                                            <Images src={logo} alt="logo boursier" width={210} url={'https://www.boursier.com/membres/abonnement?s=140&t=1995d34ed1c164d06750a84b763f3102           '}/>
                                                                        </center>
                                                                    </Column>
                                                                </Row>
                                                                <Spacer height={60}/>
                                                                <Row>
                                                                    <Text style={{fontSize: '18px', color: '#FFFFF0', fontWeight: '400', lineHeight: '28px', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif'}}>Chères lectrices, chers lecteurs, </Text>
                                                                </Row>
                                                                <Spacer height={30}/>
                                                                <Row>
                                                                    <Text style={{fontSize: '24px', lineHeight: '32px', color: '#FFFFF0', fontWeight: '600', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif'}}>
                                                                        Profitez de l&#8217;&#233;t&#233; pour faire fructifier votre <Br/>
                                                                        argent avec toutes les actus et les meilleurs <Br/>
                                                                        conseils placement de notre r&#233;daction.
                                                                    </Text>
                                                                </Row>
                                                                <Spacer height={35}/>
                                                                <Row>
                                                                    <Text style={{fontSize: '20px', color: '#FFFFF0', fontWeight: 'normal', lineHeight: '26px', fontStyle: 'italic', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif'}}>
                                                                        Pour b&#233;n&#233;ficier de notre offre, <Br/>
                                                                        n&#8217;attendez plus !
                                                                    </Text>
                                                                </Row>
                                                                <Spacer height={35}/>
                                                                <Row>
                                                                    <Column>
                                                                        <center>
                                                                            <Images src={pastille} alt="pastille" width={500} url={'https://www.boursier.com/membres/abonnement?s=140&t=1995d34ed1c164d06750a84b763f3102'}/>
                                                                        </center>
                                                                    </Column>
                                                                </Row>
                                                                <Spacer height={75}/>
                                                                <Row>
                                                                    <Column>
                                                                        <center>
                                                                            <Images src={bouton} alt="J'en profite" width={300} url={'https://www.boursier.com/membres/abonnement?s=140&t=1995d34ed1c164d06750a84b763f3102          '}/>
                                                                        </center>
                                                                    </Column>
                                                                </Row>

                                                            </Table>
                                                        </Background>
                                                    </Row>
                                                </Table>
                                            </Column>
                                        </Row>
                                    </Table>
                                </Column>
                            </Row>
                            <Spacer height={50} style={{backgroundColor: '#242D49'}}/>

                            {/* 4 BONNES RAISONS DE VOUS RÉABONNER */}
                            <Row>
                                <Text style={{fontSize: '18px', color: '#FFFFF0', fontWeight: '600', lineHeight: '23px', textTransform: 'uppercase', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif'}}>
                                    4 bonnes raisons de <Br/>
                                    vous r&#233;abonner
                                </Text>
                            </Row>
                            <Spacer height={35}/>
                            <Row>
                                <Column>
                                    <Table className={'small-padding'}>
                                        <Row>
                                            <Column width={250} style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '17px', color: '#FFFFFF', fontSize: '13px', verticalAlign: 'top', fontWeight: 'normal'}} classname={'small-12'}>
                                                <center>
                                                    <Images src={mail} alt="" width={70}/>
                                                </center>
                                                <Br responsive={false}/>
                                                <strong style={{fontSize: '15px', color: '#C4B07D', fontWeight: 'bold'}}>
                                                    Prenez de l&#8217;avance <Br/>
                                                    sur le march&#233;
                                                </strong>
                                                <Br responsive={false} style={{lineHeight: '5px'}}/><Br style={{lineHeight: '5px'}}/>
                                                Chaque matin, un conseil <Br responsive={false}/>
                                                avant l&#8217;ouverture de la Bourse
                                                <Table>

                                                    <Spacer height={30}/>

                                                </Table>
                                            </Column>
                                            <Column width={250} style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '17px', color: '#FFFFFF', fontSize: '13px', verticalAlign: 'top', fontWeight: 'normal'}} classname={'small-12'}>
                                                <center>
                                                    <Images src={alert} alt="" width={70}/>
                                                </center>
                                                <Br responsive={false}/>
                                                <strong style={{fontSize: '15px', color: '#C4B07D', fontWeight: 'bold'}}>
                                                    D&#233;couvrez les <Br/>
                                                    meilleures opportunit&#233;s
                                                </strong>
                                                <Br responsive={false} style={{lineHeight: '5px'}}/><Br style={{lineHeight: '5px'}}/>
                                                Tous nos conseils accessibles <Br responsive={false}/>
                                                en illimit&#233; sur les valeurs du <Br responsive={false}/>
                                                CAC 40 et du SBF120
                                                <Table>
                                                    <Spacer height={30}/>
                                                </Table>
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Column width={250} style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '17px', color: '#FFFFFF', fontSize: '13px', verticalAlign: 'top', fontWeight: 'normal'}} classname={'small-12'}>
                                                <center>
                                                    <Images src={wallet} alt="" width={70}/>
                                                </center>
                                                <Br responsive={false}/>
                                                <strong style={{fontSize: '15px', color: '#C4B07D', fontWeight: 'bold'}}>
                                                    Inspirez-vous des <Br/>
                                                    portefeuilles cl&#233;s en main
                                                </strong>
                                                <Br responsive={false} style={{lineHeight: '5px'}}/><Br style={{lineHeight: '5px'}}/>
                                                G&#233;r&#233;s par notre r&#233;daction <Br/>
                                                selon votre profil
                                                <Br responsive={false} style={{lineHeight: '10px'}}/><Br style={{lineHeight: '10px'}}/>
                                                <Table responsive={false} width={'auto'}>
                                                    <Row style={{borderSpacing: '2px'}}>
                                                        <Column style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '25px', color: '#C4B07D', fontSize: '13px', fontWeight: 'bold', textAlign: 'left'}}>
                                                            <Images src={puce} width={6} alt="" style={{display: 'inline-block', verticalAlign: 'middle'}}/>
                                                            &nbsp;&nbsp;D&#233;fense
                                                        </Column>
                                                    </Row>
                                                    <Row style={{borderSpacing: '2px'}}>
                                                        <Column style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '25px', color: '#C4B07D', fontSize: '13px', fontWeight: 'bold', textAlign: 'left'}}>
                                                            <Images src={puce} width={6} alt="" style={{display: 'inline-block', verticalAlign: 'middle'}}/>
                                                            &nbsp;&nbsp;&#201;quilibr&#233;
                                                        </Column>
                                                    </Row>
                                                    <Row style={{borderSpacing: '2px'}}>
                                                        <Column style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '25px', color: '#C4B07D', fontSize: '13px', fontWeight: 'bold', textAlign: 'left'}}>
                                                            <Images src={puce} width={6} alt="" style={{display: 'inline-block', verticalAlign: 'middle'}}/>
                                                            &nbsp;&nbsp;Dynamique
                                                        </Column>
                                                    </Row>

                                                    <Spacer height={30}/>
                                                </Table>
                                            </Column>
                                            <Column width={250} style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '17px', color: '#FFFFFF', fontSize: '13px', verticalAlign: 'top', fontWeight: 'normal'}} classname={'small-12'}>
                                                <center>
                                                    <Images src={letter} alt="" width={70}/>
                                                </center>
                                                <Br responsive={false}/>
                                                <strong style={{fontSize: '15px', color: '#C4B07D', fontWeight: 'bold'}}>
                                                    Prenez des <Br/>
                                                    d&#233;cisions avis&#233;es
                                                </strong>
                                                <Br responsive={false} style={{lineHeight: '5px'}}/><Br style={{lineHeight: '5px'}}/>
                                                Avec notre Lettre Opportunit&#233;s qui d&#233;crypte les march&#233;s
                                                <Table>

                                                    <Spacer height={30}/>

                                                </Table>
                                            </Column>
                                        </Row>

                                    </Table>
                                </Column>
                            </Row>
                            {/* 4 BONNES RAISONS DE VOUS RÉABONNER */}
                        </Table>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Table style={{backgroundColor: '#071534', width: '100%'}}>
                            <Spacer height={15}/>
                            <Row>
                                <Text width={250} style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', lineHeight: '20px', color: '#FFFFFF', fontSize: '12px', fontWeight: 'normal'}}>
                                    <strong style={{color: '#C4B07D'}}>Si vous &#234;tes d&#233;j&#224; abonn&#233; &#224; dur&#233;e fixe, cette offre prolongera votre abonnement.</strong> <Br responsive={false}/>
                                    Valeur de r&#233;f&#233;rence 348&#8364;

                                </Text>
                            </Row>
                            <Spacer height={15}/>
                        </Table>
                    </Column>


                </Row>
                <Row>
                    <Column>
                        <Table className={'small-padding'}>
                            <Spacer height={50}/>
                            <Row>
                                <Column>
                                    <Table width={600}>
                                        <Row>
                                            <Text style={{fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', fontSize: '16px', lineHeight: '26px', color: '#242D49', fontWeight: 'normal', textAlign: 'left'}}>

                                                R&#233;abonnez-vous d&#232;s maintenant et acc&#233;dez en illimit&#233; &#224; toutes les analyses quotidiennes de nos experts. La r&#233;daction passe au crible plus de 800 valeurs cot&#233;es &#224; Paris et &#224; l&#8217;&#233;tranger.

                                                <Br responsive={false}/><Br responsive={false}/>
                                                <strong style={{fontSize: '18px'}}>
                                                    Offre valable 72h !
                                                </strong>
                                            </Text>
                                        </Row>
                                    </Table>
                                </Column>
                            </Row>
                            <Spacer height={40}/>
                            <Row>
                                <Column>
                                    <Table width={600}>
                                        <Row>
                                            <Column classname={'small-12'} style={{width: '50%', verticalAlign: 'top', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', fontSize: '16px', lineHeight: '26px', color: '#242D49', textAlign: 'left', fontWeight: 'normal'}}>
                                                Merci de votre confiance.
                                                <Br/>
                                            </Column>
                                            <Column classname={'small-12'} style={{width: '50%', verticalAlign: 'top', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', fontSize: '16px', lineHeight: '26px', color: '#242D49', textAlign: 'left', fontWeight: 'normal'}}>
                                                <strong style={{fontStyle: 'italic'}}>
                                                    Francois Monnier
                                                </strong>
                                                <Br responsive={false}/>
                                                Directeur de la r&#233;daction Boursier.com
                                            </Column>
                                        </Row>
                                    </Table>
                                </Column>
                            </Row>
                            <Spacer height={50}/>
                            <Row>
                                <Column>
                                    <Table width={600}>
                                        <Row>
                                            <Column colSpan={3}>
                                                <center>
                                                    <Images src={separator} width={593} alt="---"/>
                                                </center>
                                            </Column>
                                        </Row>
                                        <Spacer height={40}/>
                                        <Row>
                                            <Column width={40} style={{verticalAlign: 'top'}}>
                                                <Images src={info} width={40} alt="Info : "/>
                                            </Column>
                                            <Column width={30}>&nbsp;</Column>
                                            <Column style={{verticalAlign: 'top', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', fontSize: '14px', lineHeight: '24px', color: '#242D49', textAlign: 'left', fontWeight: '400', fontStyle: 'italic'}}>
                                                Pour toute question ou demande d’assistance, notre service client Boursier.com reste joignable du lundi au vendredi de 9h à 17h au
                                                <strong> 01.87.39.84.48</strong>, ou par email à
                                                <a href="mailto:service-clients@boursier.com" target="_blank" style={{fontWeight: 'bold', textDecoration: 'underline', color: '#242D49'}}> service-clients@boursier.com</a>
                                            </Column>
                                        </Row>
                                        <Spacer height={40}/>
                                        <Row>
                                            <Column colSpan={3}>
                                                <center>
                                                    <Images src={separator} width={593} alt="---"/>
                                                </center>
                                            </Column>
                                        </Row>
                                    </Table>
                                </Column>
                            </Row>
                            <Spacer height={45}/>
                        </Table>
                    </Column>

                </Row>
            </Table>
            {/* OFFER SECTION */}
            {/* FOOTER SECTION */}
            <Table width={700} style={{backgroundColor: '#FFFFFF'}}>
                <Row>
                    <Column>
                        <Table width={600}>
                            <Row>
                                <Column width={20}>&nbsp;</Column>
                                <Column style={{color: '#9B9B9B', fontFamily: '"Open Sans", Arial, Helvetica, sans-serif', fontSize: '9px', fontWeight: 'normal', lineHeight: '1.3', textAlign: 'center'}}>
                                    Copyright @ 1998-2024 Boursier.com, tous droits r&eacute;serv&eacute;s
                                    <Br/>
                                    Attention, ce message est un envoi automatique, merci de ne pas y r&eacute;pondre, car aucune r&eacute;ponse ne pourra vous &ecirc;tre apport&eacute;e.<Br/>
                                    Dans le cadre de la gestion de votre compte, Boursier.com traite certaines de vos donn&eacute;es personnelles dans le cadre de l'ex&eacute;cution<Br/>
                                    d'un contrat ou de votre consentement. Pour en savoir plus sur vos droits et nos pratiques en mati&egrave;re de protection<Br/>
                                    de vos donn&eacute;es personnelles : <a href="https://www.boursier.com/services/informations/politique-confidentialite" target="_blank" style={{color: '#9B9B9B', fontFamily: '"Open Sans", Arial, sans-serif', textDecoration: 'underline'}}>Politique de confidentialité Boursier.com</a>.
                                    <Br/>
                                    Vous recevez ce message car vous êtes inscrit à la liste de diffusion des Boursier.com,<Br/> si vous ne souhaitez plus recevoir de messages de notre part, suivez ce <a href="https://www.boursier.com/membres/inscription/resiliation?u=<%=context.targetData.idBoursier%>&t=<%=context.targetData.idHashBoursier%>&o=99" target="_blank" style={{color: '#9B9B9B', fontFamily: '"Open Sans", Arial, sans-serif', textDecoration: 'underline'}}>lien</a>
                                    <Br/>
                                    Le site Boursier.com est &eacute;dit&eacute; par Investir Publications

                                </Column>
                                <Column width={20}>&nbsp;</Column>

                            </Row>
                            <Spacer height={40} colSpan={3}/>

                        </Table>
                    </Column>
                </Row>
            </Table>
        </React.Fragment>

    );
};

export default <Boursier_2024/>;