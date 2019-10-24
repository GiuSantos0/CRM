import styled from 'styled-components';
import { CardActions } from '@material-ui/core';

export const StyledCardActions = styled( CardActions )`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding 20px;
`;

