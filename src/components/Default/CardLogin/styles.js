import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Link = styled.a`
    text-decoration: none;
    color: #5d5d5d;
    font-size: 15px;
    font-family: 'Montserrat'; 
    margin-top: 20px;

    :hover {
        text-decoration: underline;
    }

`;

export const CardLoginStyled = styled( Card )`
    box-shadow: 5px 10px 8px #888888 !important;
    border-radius: 10px !important;
    max-width: 500 !important;
    background-color: #ffffff6b !important;
`;



