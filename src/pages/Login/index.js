import React , { useState }  from 'react';
import './styles.css';
import { FormControl, makeStyles, Grid, Container} from '@material-ui/core';
import CardLogin from '../../components/CardLogin';
import Body from '../../components/Body';
import { StyledTextField } from '../../components/TextField';

const useStyles = makeStyles(theme => ({
  background: {
    background: "#000 url('https://dashplan.com.br/img/wallpaper/walppaper3.png') no-repeat",
    backgroundPosition: '81% 11%',
    backgroundSize: '322% !important',
    width: '100%',
    height: '100%',
  },
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
    width:'100%',
  },

}));

export default function Login({ history }) { 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, senha);

    history.push('/DashPlanner');
  }

  const classes = useStyles();
    return(
      <div>
        <Body background='https://dashplan.com.br/img/wallpaper/walppaper3.png'/>
        <Container fixed className={classes.container} maxWidth="xl">
          <Grid container justify="center"  xl={12}>
            <Grid
              item
              xs={10}
              s= {10}
              sm={6}
              lg={4}
              xl={4}
            >
              <div className="content" >
                <form onSubmit={handleSubmit}>
                  <CardLogin
                    input1={
                      <FormControl className={classes.formControl}  fullWidth={true}>
                        <StyledTextField  
                          label="Username"
                          id="username"
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </FormControl>
                    }

                    input2={
                      <FormControl className={classes.formControl} fullWidth={true}>
                        <StyledTextField 
                          label="Senha" 
                          id="senha" 
                          type="password"
                          onChange={e => setSenha(e.target.value)}
                          />
                      </FormControl>
                    }
                    valueButton="entrar"
                    link="Esqueci minha senha"
                    hrefDoLink='#'
                  >           
                </CardLogin>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    ) 
  };

