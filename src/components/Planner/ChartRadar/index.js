import React, { Component }from 'react';
import { Radar } from 'react-chartjs-2';


export default class ChartBarra extends Component  {
    constructor(props){
        super(props);

        this.state = {
            data: {
                labels: [ 
                    'Prospecção', 
                    'Pré Venda/Bitrix/Processo', 
                    'Clínica/Venda', 
                    'Coleta/Envio das Info',
                    'Entrega',
                    'Plano de Ação',
                    'FUP Monitoramento',
                    'Análise Comportamental',
                    'Renovação',
                    'GFAI Seguros',
                ],
                datasets: [
                 {
                    label: 'PF',
                    data: [
                        3.0,
                        5.0,
                        4.0,
                        5.0,
                        5.0,
                        4.0,
                        4.0,
                        2.0,
                        4.0,
                        4.0,
                    ],
                    backgroundColor:'#ffc1076e',
                    borderColor:'#ffc107',
                    borderWidth:[2]
                },
                {
                    label: 'Média GFAI',
                    data: [
                        3.3,
                        3.9,
                        3.7,
                        4.0,
                        3.7,
                        3.8,
                        3.3,
                        3.1,
                        2.7,
                        3.4,
                    ],
                    backgroundColor:'#ff980069',
                    borderColor:'#ff9800',
                    borderWidth:[2]
                },
                {
                    label: 'CA',
                    data: [
                        0.0,
                        0.0,
                        0.0,
                        0.0,
                        0.0,
                        0.0,
                        0.0,
                        0.0,
                        0.0,
                        0.0,
                    ],
                    backgroundColor:'#965d098f',
                    borderColor:'#985b00',
                    borderWidth:[2]
                },
                {
                    label: 'Média Unid',
                    data: [
                        2.3,
                        3.3,
                        3.0,
                        2.3,
                        3.0,
                        3.0,
                        2.3,
                        2.7,
                        1.3,
                        2.7,
                    ],
                    backgroundColor:'#ff57226e',
                    borderColor:'#ff5722',
                    borderWidth:[2]
                }
            ]
            }
        }
    }
    render(){
 return (

    <Radar 
        data={this.state.data} 
        width={20}
        height={15}  
        options={{ 
            responsive: true,
    
        }}

    />
 )}};