import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const StyledTextField = styled( TextField )`
  .MuiFormLabel-root.Mui-focused {
    color: #f8b100;
    font-weight: 900;
  }

    .MuiInputBase-root{
      border-bottom: 2px solid grey;
      color: #f8b100;
    }

    .MuiInput-underline:after {
      left: 0;
      right: 0;
      bottom: -2px;
      content: "";
      position: absolute;
      transform: scaleX(0);
      transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
      border-bottom: 2px solid #f8b100;
      pointer-events: none;
    }

    .MuiInput-underline:before {
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      position: absolute;
      transform: scaleX(0);
      transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
      border-bottom: 2px solid #f8b100;
      pointer-events: none;
    }
 
`;