import styled from 'styled-components';
import { sizes } from '../Layout/LayoutStyles';

export const HomeWrap = styled.div`
    background-color : var(--blue);
    height: 100vh;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 479px){
        background-image: url('./img/bursts-mobile.svg');
        background-position: center top 30%;
        background-repeat: no-repeat;
        background-size: 195%;
    }
    @media (min-width: 480px){
        background-image: url('./img/bursts-tablet.svg');
        background-size: 153%;
        background-position: right 40% center;
    }
    @media ${sizes.large_desktop} {
        background-image: url('./img/bursts.svg');
        background-size: 175%;
        background-position: 46% 4%;
        -webkit-box-pack: center;
        min-height: 846px;
    }
`;

export const Info = styled.div`
    text-align: center;
    @media(max-width: 479px){
        width: 270px;
    }
    @media (min-width: 480px){
        width: 450px;
    }
    @media ${sizes.large_desktop}{
        width: 744px;
    }
`;

export const Title = styled.h1`
    color: var(--green);          
    margin: 0px;
    letter-spacing: -0.04em !important;
    @media (min-width: 480px){
        font-size: 104px;
        line-height: 104px;
        padding-bottom: 24px;
    }    
    @media ${sizes.large_desktop}{
        font-size: 156px;
        padding-bottom: 40px;
        line-height: 166px;  
    }
`;

export const Description = styled.p`
    text-align: center;
    display: block;
    padding: 0px 0px 1em;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 40px;
    color: var(--green);
`;