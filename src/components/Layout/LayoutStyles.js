import styled from 'styled-components';

const sizes = {
    phone: '(max-width: 575px)',
    landscape_phone: '(min-width: 576px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 992px)',
    large_desktop: '(min-width: 1200px)'
}

const colorSecundaryButton = (color) => {
    let colorStyles = '';
    switch(color){
        case 'black': 
            colorStyles = `
                color : var(--white);
                background : var(--black);
                &:hover{
                    color : var(--black);
                    background : var(--white);
                    -webkit-box-shadow: 0 0 0 2px #000 inset; */
                    box-shadow: inset 0 0 0 2px #000;  
                }               
            `;
            break;
        case 'white': 
            colorStyles = `
                color : var(--black);
                background : var(--white);                
                -webkit-box-shadow: 0 0 0 2px #000 inset; */
                box-shadow: inset 0 0 0 2px #000;  
                &:hover{
                    background : var(--grey);
                }                
            `;
            break;
        default: ;
    }
    return colorStyles;
}

const Button = styled.button` 
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    display: inline-block;    
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    border-radius: 500px;
    padding: 14px 32px;
`;

export const PrimaryButton = styled(Button)`
    color : var(--blue);
    background : var(--green);
    font-weight: 700;
    font-size: 14px;
`;

export const SecondaryButton = styled(Button)`
    ${ ({color}) => colorSecundaryButton(color) }
    font-weight: 400;
    font-size: 16px;
`;

export const Container = styled.div`    
    margin: 0 auto;
    padding: 0 15px;
    @media ${sizes.tablet}{
        max-width: 750px;
    }
    @media ${sizes.desktop}{
        max-width: 970px;
    }
    @media ${sizes.large_desktop}{
        max-width: 1170px;
    }
`;

export {
    sizes
};