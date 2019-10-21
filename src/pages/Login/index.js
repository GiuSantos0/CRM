import React from 'react';
import './styles.css';
import styled from 'styled-components';
import { TextField , Container , CssBaseline , FormControl , makeStyles} from '@material-ui/core';
import CardLogin from '../../components/CardLogin';

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

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  formControl: {
    width:'100%'
  },
}));

export default function Login() { 
  const classes = useStyles();
    return(
      <React.Fragment>
        <CssBaseline>
            <Container maxWidth="xs" className={classes.container}>
              <div className="content">
               <CardLogin
                  input1={
                    <FormControl className={classes.formControl}  fullWidth={true}>
                      <StyledTextField  label="Username"id="username"type="email"
                      />
                    </FormControl>
                  }

                  input2={
                    <FormControl className={classes.formControl} fullWidth={true}>
                      <StyledTextField label="Senha" id="senha" type="password"/>
                    </FormControl>
                  }
                  valueButton="entrar"
                  link="Esqueci minha senha"
                  hrefDoLink='#'
               >
               </CardLogin>
              </div>
            </Container>
        </CssBaseline>
      </React.Fragment>
    ) 
  };

