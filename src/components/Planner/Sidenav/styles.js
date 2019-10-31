import styled from 'styled-components';

export const Saudacao = styled.h4`
display: initial;
color: #f8b100;

@media screen and (max-width:600px){
  display: none !important;
}
`;


export const Main = styled.main`
@media screen and (max-width:480px){
  margin-left: 10px !important;
  margin-right:10px;
  margin-top:0px;

  }

  @media screen and (max-width:600px){
    margin-left: 10px !important;
    margin-right:10px;
    margin-top:0px;

}

`;
