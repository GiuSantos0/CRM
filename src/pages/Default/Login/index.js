import React , { Component }  from 'react';
import './styles.css';
import { FormControl, Grid, Container} from '@material-ui/core';
import CardLogin from '../../../components/Default/CardLogin';
import Body from '../../../components/Default/Body';
import { StyledTextField } from '../../../components/Default/TextField';
import { login } from "../../../services/auth";
import api from "../../../services/api";


class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/DashPlanner");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Body background="https://dashplan.com.br/img/wallpaper/walppaper3.png"/>
        <Container fixed className='container' maxWidth="xl">
          <form onSubmit={this.handleSignIn}>
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
                 {this.state.error && <p>{this.state.error}</p>}
                    <CardLogin
                      input1={
                        
                        <FormControl className='formControl'  fullWidth={true}>
                          <StyledTextField  
                            label="Username"
                            id="emailInput"
                            type="email"
                            onChange={e => this.setState({ email: e.target.value })}

                          />
                        </FormControl>
                      }

                      input2={
                        <FormControl className='formControl' fullWidth={true}>
                          <StyledTextField 
                            label="Senha" 
                            id="passwordInput" 
                            type="password"
                            onChange={e => this.setState({ password: e.target.value })}
                            />
                        </FormControl>
                      }
                      valueButton="entrar"
                      link="Esqueci minha senha"
                      hrefDoLink='#'
                    >           
                  </CardLogin>
              </div>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
    ) 
  }
};

export default Login;