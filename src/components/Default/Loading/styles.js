import styled from 'styled-components';
import Lottie from 'react-lottie';


export const StyledBg = styled.body`
    background: #000 url('../../../assets/menina-load.png') no-repeat;
    width:100%;
`;

export const StyledLottie = styled(Lottie) `
    padding-top: 500px;
`;

export const LoadingSpan = styled.span`
    text-align: center;
    padding-top: 10%;
    display: block;
    color: #f8b100;
    font-weight: 600;
    font-size: 20px;
`;
