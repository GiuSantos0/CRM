import React from 'react';
import Fadein from 'react-fade-in';
import * as MoneyLoad from "../../../assets/loading/loading2.json";
import * as CheckLoading from "../../../assets/loading/checkloading.json";
import Routes from '../../../routes';
import { StyledLottie, LoadingSpan } from './styles.js';
import Body from '../Body';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MoneyLoad.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
    }

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: CheckLoading.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
    };

export default class Loading extends React.Component {
    constructor(props){
       super(props)
       this.state = {
            loading: undefined, 
            done: undefined 
        }
    }
    componentDidMount() {
        setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ loading: true }));
        setTimeout (() => {
            this.setState ({done: true});
         }, 2000); 
        }, 5000);
        }

    render(){
       return(
           
            <div>
                {!this.state.done ? (
                    <Fadein>
                        <Body background='https://i.ibb.co/pdjbRdp/menina-load.png'/>
                            <div>
                                {!this.state.loading ? (
                                    <>
                                        <LoadingSpan>Carregando...</LoadingSpan>
                                        <StyledLottie options={defaultOptions} height={150} width={150} />
                                    </>
                                ) : (
                                    <>
                                        <LoadingSpan/>
                                        <StyledLottie options={defaultOptions2} height={150} width={150} />
                                    </>
                                )}
                            </div>
                    </Fadein>
                        ) : (
                        <Routes/>
                    )}
            </div>
        )
    }
 }