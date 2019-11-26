import React, {Component} from 'react';

import api from "../../../services/api";


class NameUser extends Component{
    state = {
        users: [],
    }

    async componentDidMount() {
        const response = await api.get('/sessions')

        this.setState({ users: response.data })
    }

    render() {
        return(
            <>
                {this.state.users.map(register =>(
                    <p>{register.username}</p>
                ))}
            </>
        );
    }
}

export default NameUser;