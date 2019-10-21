import React from 'react'
import { ButtonLarge } from '../ButtonLarge';
import { Link, CardLoginStyled } from './styles';
import {CardContent} from '@material-ui/core';

import logo from '../../assets/img/dashplanbygfai.png';

function CardLogin(props){

    return  ( 
        <CardLoginStyled>
            <form action={props.action}>
                <CardContent>
                    <img src={logo} alt="logo dashplan" className="logo"/>

                    {props.input1}
                    {props.input2}

                    <ButtonLarge size='large'>
                        {props.valueButton}
                    </ButtonLarge>
                    <div>
                        <Link href={props.hrefDoLink}>
                            {props.link}
                        </Link>
                    </div>
                </CardContent>
            </form>
        </CardLoginStyled>
   
    )}

export default CardLogin;