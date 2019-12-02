import React from 'react';
import Fadein from 'react-fade-in';
import Lottie from 'react-lottie';
import * as MoneyLoad from "../../../assets/loading.json";
import * as CheckLoading from "../../../assets/checkloading.json";
import Routes from '../../../routes';

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
         }, 5000); 
        }, 1200);
        }

    render(){
       return(
           
            <div>
                {!this.state.done ? (
                    <Fadein>
                        <div>
                            <h1>fetching pizza</h1>
                            {!this.state.loading ? (
                                <Lottie options={defaultOptions} height={120} width={120} />
                            ) : (
                                <Lottie options={defaultOptions2} height={120} width={120} />
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