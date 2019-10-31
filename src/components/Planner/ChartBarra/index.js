import React, { Component }from 'react';
import { Bar } from 'react-chartjs-2';


export default class ChartBarra extends Component  {
    constructor(props){
        super(props);

        this.state = {
            data: {
                labels: [ 'janeiro', 'fevereiro', 'março'],
                datasets: [
                 {
                    label: 'Cobranças pagas',
                    data: [50,20,10],
                    backgroundColor:'#28a745d6',
                    borderColor:'#28a745d6',
                    borderWidth:[0]
                },
                {
                    label: 'Cobranças futuras',
                    data: [30, 56, 87],
                    backgroundColor: '#17a2b8c2',
                    borderColor:'#17a2b8c2',
                    borderWidth:[0]
                },
                {
                    label: 'Cobrança Vencida',
                    data: [32,98,32],
                    backgroundColor:'#dc3545d9',
                    borderColor:'#dc3545d9',
                    borderWidth:[0]
                }]
            }
        }
    }
    render(){
 return (

    <Bar 
        data={this.state.data} 
        width={20}
        height={5}  
        options={{ 
            responsive: true,
    
        }}

    />
 )}};