
import styled from 'styled-components';
import { Container, sizes } from '../Layout/LayoutStyles';

export const WrapNav = styled.div`
    background: var(--black);
`;

export const ContainerNav = styled(Container)`
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    -webkit-align-items: center;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color:white;    
    height: 58px;
    @media ${sizes.desktop}{
        height: 77px;
    }
`;

export const LogoNav = styled.div`
    width: 100px;
    @media ${sizes.desktop}{
        width: 145px;
    }
`;

export const LinkLogo = styled.a`
    color: var(--white);
    display: inline-block;
    
`;

export const Logo = styled.img`
    width: 100%;
    height: auto;
`;

export const LinksWrap = styled.div`
    ${ (props) => props.responsiveOpen ? 'display: flex !important;' : '' }
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    z-index: 2;
    text-align: center;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    @media ${sizes.desktop}{
        display: block;
        position: relative;
        text-align: right;
    }    
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;    
    @media ${sizes.desktop} {
        display: -webkit-inline-flex;
        display: -moz-inline-box;
        display: inline-flex;
    }
`;

let blankListItem =  `
    margin: auto 17px;
    display: inline-block;
    height: 16px;
    width: 1px;
    background: currentColor;
    color : var(--blank);
    display: none;
    @media ${sizes.desktop} {
        display: block;
    }
`;

let closeItem = `
    display: block;
    @media ${sizes.desktop} {
        display: none;
    }
`;

export const ListItem = styled.li`
    ${ (props) => props.blank ? blankListItem : '' }
    ${ (props) => props.close ? closeItem : '' }
`;

export const Link = styled.a`
    color: var(--white);
    padding: 28px 17px;
    display: block;
    text-decoration: none;
    font-weight: 700;
    &:hover{
        color : var(--green);
    }
`;

export const BurguerButton = styled.button`
    padding: 0 0 1px 9px;
    border: none;
    background-color: transparent;
    display: inline-block;
    position: relative;
    z-index: 1;
    color: #fff;  
    cursor: pointer;
    @media ${sizes.desktop}{
        display: none;
    }
    span:first-child{
        margin-top: 0px !important;
    }
    span{
        background-color: currentColor;
        border-radius: 1px;
        -webkit-transform-origin: 21px;
        -moz-transform-origin: 21px;
        transform-origin: 21px;
        -webkit-transition: -webkit-transform .2s;
        display: block;
        height: 3px;
        width: 22px;
        transition: -webkit-transform .2s;
        -webkit-transition: -webkit-transform .2s;
        -moz-transition: transform .2s,-moz-transform .2s;
        transition: transform .2s;
        transition: transform .2s,-webkit-transform .2s,-moz-transform .2s;
        transition: transform .2s,-webkit-transform .2s;
        margin-top: 4px;
    }
`;