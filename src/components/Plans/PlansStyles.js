import styled from 'styled-components';
import { sizes } from '../Layout/LayoutStyles';

export const PlanWrap = styled.div`
    margin: 0 auto;
    margin-bottom: 50px;
    @media ${sizes.desktop} {
        max-width: 940px;
    }
`;

export const Title = styled.h2`
    color : var(--black);
    text-align: center;
    margin: 80px 0 24px;
`;

export const Row = styled.div`
    padding: 0 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    &.plans{
        flex-direction: column;
        @media ${sizes.desktop} {                        
            flex-direction: row;
        }
        div{  
            &:first-child{
                @media(max-width: 991px){
                    display: none;
                }
            }          
            @media(max-width: 991px) {            
                width: auto;
                padding: 10px;
                border: 2px solid #f8f8f8;
                margin: 15px 0px;
                border-radius: 10px;
                -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            }
        }
    }
    &.only-movil{        
        @media ${sizes.desktop} {            
            display: none;
        }
        & p{
            padding: 0px;
            margin-top: 18px;
        }
    }
`;

export const Col = styled.div`
    text-align: center;
    padding: 12px;
    padding-top: 0px;
    border: 1px solid #f8f8f8;  
    &.big{
        flex: 1 1 auto;
        border-left: 0;
        width: auto;
    }
    &.small{
        width: 55px;
        flex-shrink: 0;
        @media ${sizes.desktop} {            
            width: 225px;
        }
    }
    &.small:last-child{
        border-right: 0;
    }    
    .promo{
        padding: 3px 0;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: .4px;
        min-height: 2.4em;        
        display: block;
        color: #fff;
        margin: 0px -12px 12px -12px;  
        @media(max-width: 991px){
            margin: 0px;
        }             
        &.blue{
            background-color: #2e77d0;
            line-height: 25px; 
            @media(max-width: 991px) {            
                width: auto;
                border-radius: 10px 10px 0px 0px;
                margin: -10px -10px 0px -10px
            }
        }
    }
    h5{
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        margin: 0;
    }
    h6{
        font-size: 24px;
        line-height: 38px;
        font-weight: 400;
        margin: 0;
    }
    p{
        padding: 0 42px;
        margin: 12px 0;
        font-size: 14px;
        line-height: 18px;
    }
    .bonus{
        padding: 0;
        margin: 0;
        padding-top: 15px;
        text-align: left;
        font-weight: 600;
        font-size: 16px;
    }
    .icon{
        background-image : url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' class='Svg-sc-1usfroi-0 jNmUis'%3E%3Cpath fill='none' stroke='%23181818' d='M3.32 12.86L8.9 19.4 20.99 5.26'/%3E%3C/svg%3E");
        display: inline-block !important;
        height: 25px;
        width: 25px;
        background-repeat: no-repeat;
        margin-top: 12px;
    }
`;

export const Terms = styled.small`
    padding: 0 12px;
    margin-bottom: 24px;
    text-align: center;
    padding: 0 12px;
    color: #606367;
    display: block;
    & a{
        color: #606367;
    }
`;

export const Explore = styled.div`
    padding: 18px;
    -webkit-box-shadow: rgb(0 0 0 / 30%) 0 0 8px;
    box-shadow: 0 0 8px rgb(0 0 0 / 30%);  
    border-radius: 10px;  
    text-align: center;  
    margin: 0px 15px;
    @media ${sizes.desktop} {            
        display: flex;
        align-items: center;   
        justify-content: center;
        text-align: left;        
        margin: 0px 0px;
    }
    & p{
        padding-right: 20px;
        font-size: 16px;
        font-weight: 500;
    } 
    & button{
        width: auto !important;
        margin-bottom: 0px !important;
    }
`;