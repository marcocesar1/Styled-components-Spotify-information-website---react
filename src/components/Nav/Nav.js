import { React, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../Layout/LayoutStyles';
import { WrapNav, ContainerNav, LogoNav, LinkLogo, Logo, LinksWrap, List, ListItem, Link, BurguerButton, SpanButton } from './NavStyles';

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const openResponsiveMenu = () => {
        setOpenMenu(true);
    }

    const closeResponsiveMenu = e => {
        e.preventDefault();
        setOpenMenu(false);
    }

    return (
        <header>
            <WrapNav>
                <ContainerNav>
                    <LogoNav>
                        <LinkLogo href="/" title="Spotify">
                            <Logo src="./img/logo-spotify.png"/>
                        </LinkLogo>
                    </LogoNav>
                    <LinksWrap responsiveOpen={openMenu}>
                        <nav>
                            <List>
                                <ListItem>
                                    <Link href="#" title="Premium">Premium</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#" title="Ayuda">Ayuda</Link>
                                </ListItem>
                                <ListItem>
                                    <Link  href="#" title="Descargar">Descargar</Link>
                                </ListItem>

                                <ListItem blank role="separator"/>

                                <ListItem>
                                    <Link  href="#" title="Regístrate">Regístrate</Link>
                                </ListItem>
                                <ListItem>
                                    <Link  href="#" title="Iniciar sesión">Iniciar sesión</Link>
                                </ListItem>
                                <ListItem close>
                                    <Link onClick={ closeResponsiveMenu } href="#" title="Cerrar" rel="nofollow">CERRAR</Link>
                                </ListItem>
                            </List>
                        </nav>
                    </LinksWrap>
                    <BurguerButton onClick={ openResponsiveMenu }>
                        <SpanButton/>
                        <SpanButton separated />
                        <SpanButton separated />
                    </BurguerButton>
                </ContainerNav>
            </WrapNav>
            <div style={ { marginBottom: '20px', display: 'none' } }>
            <PrimaryButton>OBTENER SPOTIFY FREE</PrimaryButton>
            <SecondaryButton color="black">Cámbiate a plan Premium</SecondaryButton>
            <SecondaryButton color="white">Regístrate gratis</SecondaryButton>
            </div>
            
        </header>
    )
}

export default Nav;

