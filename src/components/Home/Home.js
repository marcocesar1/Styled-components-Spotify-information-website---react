import React from 'react';
import { PrimaryButton } from '../Layout/LayoutStyles';
import { HomeWrap, Info, Title, Description } from './HomeStyles';

const Home = () => {
    return (
        <HomeWrap>
            <Info>
                <Title>Escuchar es todo</Title>
                <Description>Millones de canciones y podcasts. No necesitas tarjeta de crédito.</Description>
                <PrimaryButton>OBTENER SPOTIFY FREE</PrimaryButton>
            </Info>
        </HomeWrap>
    );
};


export default Home;