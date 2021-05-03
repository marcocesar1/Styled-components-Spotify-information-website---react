import React from 'react';
import { WrapFooter, WrapLogo, WrapLinks, WrapSocial, GroupList, List, LinkList, SocialMedia, Country, BottomLinks } from './FooterStyles';
import { Container } from '../Layout/LayoutStyles';

const Footer = () => {
    return (
        <WrapFooter>
            <Container>
                <footer>
                    <nav>
                        <WrapLogo>
                            <a href="/" title="Spotify">
                                <img src="./img/logo-spotify.png" alt="Logo spotify" />
                            </a>
                        </WrapLogo>
                        <WrapLinks>
                            <GroupList>
                                <span>COMPAÑÍA</span>
                                <List>
                                    <li>
                                        <LinkList href="/">Acerca de</LinkList>
                                    </li>
                                    <li>
                                        <LinkList href="/">Empleos</LinkList>
                                    </li>
                                    <li>
                                        <LinkList href="/">For the Record</LinkList>
                                    </li>                                
                                </List>
                            </GroupList>
                            <GroupList>
                                <span>COMUNIDADES</span>
                                <List>
                                    <li>
                                        <LinkList href="/">Servicios para artistas</LinkList>
                                    </li>
                                    <li>
                                        <LinkList href="/">Desarrolladores</LinkList>
                                    </li>
                                    <li>
                                        <LinkList href="/">Publicidad</LinkList>
                                    </li>                                
                                    <li>
                                        <LinkList href="/">Inversionistas</LinkList>
                                    </li>                                
                                    <li>
                                        <LinkList href="/">Proveedores</LinkList>
                                    </li>                                
                                </List>
                            </GroupList>
                            <GroupList>
                                <span>ENLACES ÚTILES</span>
                                <List>
                                    <li>
                                        <LinkList href="/">Ayuda</LinkList>
                                    </li>
                                    <li>
                                        <LinkList href="/">Reproductor web</LinkList>
                                    </li>
                                    <li>
                                        <LinkList href="/">App móvil gratis</LinkList>
                                    </li>                              
                                </List>
                            </GroupList>
                        </WrapLinks>
                        <WrapSocial>
                            <SocialMedia>
                                <li>
                                    <a href="/">
                                        <span className="icon icon-ig"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon icon-tw"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon icon-fb"></span>
                                    </a>
                                </li>
                            </SocialMedia>
                        </WrapSocial>
                    </nav>
                    <Country>
                        <small>México</small>
                    </Country>
                    <BottomLinks>
                        <ul>
                            <li>
                                <a href="/">Legal</a>
                            </li>
                            <li>
                                <a href="/">Centro de privacidad</a>
                            </li>
                            <li>
                                <a href="/">Política de Privacidad</a>
                            </li>
                            <li>
                                <a href="/">Cookies</a>
                            </li>
                            <li>
                                <a href="/">Sobre los anuncios</a>
                            </li>
                        </ul>
                        <span>© 2021 Spotify AB</span>
                    </BottomLinks>
                </footer>
            </Container>
        </WrapFooter>
    )
}
export default Footer;