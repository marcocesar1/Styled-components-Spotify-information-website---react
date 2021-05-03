import styled from 'styled-components';
import { sizes } from '../Layout/LayoutStyles';

export const WrapFooter = styled.div`
    background-color: var(--black);
    color: var(--white);
    padding: 50px 0 20px;
    & nav{
        display: flex;
        flex-direction: column;
        @media ${sizes.desktop}{
            flex-direction: row;
        }
    }
`;

export const WrapLogo = styled.div`
    width: 16.6%;
    a{
        display: block;
        img{
            display: block;
            width: 100%;
            height: auto;
            max-width: 132px;
            padding-top: 10px;
        }
    }
`;

export const WrapLinks = styled.div`    
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    @media ${sizes.landscape_phone}{
        -webkit-flex-direction: row;
        flex-direction: row;
    }
    @media ${sizes.desktop}{
        width: 50%;
    }
`;

export const WrapSocial = styled.div`    
    @media ${sizes.desktop}{
        margin: 0 15px 0 auto;
    }  
`;

export const GroupList = styled.div`
    flex: 1 0;
    span{
        color: #919496;
        font-size: 12px;
        font-weight: 900;
        line-height: 1.4;
        letter-spacing: .08em;        
        display: block;
        margin: 50px 0 22px;
        @media ${sizes.desktop}{
            margin: 20px 0;
        }
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export {
    List
}

export const LinkList = styled.a`
    display: inline-block;
    padding: 3px 0 15px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: none;
    color: var(--white);
    &:hover{
        color: var(--green);
    }
`;

export const SocialMedia = styled(List)`
    display: inline-flex;
    & li:not(:last-child) {
        margin-right: 15px;
    }
    & a{
        display: inline-block;
        border-radius: 50%;
        background-color: #222326;
        width: 54px;
        height: 54px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    & .icon{
        display: block;
        width: 24px;
        height: 24px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        &-fb{
            background-image: url('./img/icon-fb.png');            
        }
        &-tw{
            background-image: url('./img/icon-tw.png');            
        }
        &-ig{
            background-image: url('./img/icon-ig.png');            
        }
    }
`;  

export const Country = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: end;
    color: #919496;
`;

export const BottomLinks = styled.div`
    display: flex;
    justify-content: space-between;
    & ul{
        margin: 0 45px 0 0;
        padding: 0 0 0 15px;        
        & li{
            list-style: none;
            display: inline-block;
            line-height: normal;
            letter-spacing: 0;
            margin-right: 24px;
            & a{
                color: #919496;
            }
        }
    }
    & a{
        font-size: 12px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        -webkit-align-items: center;
        align-items: center;
        white-space: nowrap;
        text-decoration: none;        
        @media ${sizes.phone}{
            padding: 1em 0;
        }
    }
    & span{
        flex-shrink: 0;
        font-size: 12px;
        color: #919496;
        padding: 1em 0;
    }
`;