import { createGlobalStyle } from 'styled-components'

const Body = createGlobalStyle`
body {
    background: #e6e6e6 url('${props => props.background}') no-repeat !important;
    -webkit-font-smoothing: antialiased !important;
    background-position: 81% 1%;
}

@media screen and (max-width:1200px){
    body{
       background: #000 url('../../assets/img/wallpaper.png') no-repeat;
       background-position: 81% 22%;
       background-size: 410% ;
       position: relative;
    }
 }

@media screen and (max-width:480px){
    body{
       background: #000 url('../../assets/img/wallpaper.png') no-repeat;
       background-position: 81% 22%;
       background-size: 410% ;
       position: relative;
    }
 }
 
 @media screen and (min-width:1300px){
    body{
        background: #000 url('../../assets/img/wallpaper.png') no-repeat;
        background-position: 81% 22%;
        background-size: 100% !important;
     }
  }
 
 @media screen and (min-height:720px){
   body{
     background-position: 81% 11%;
     background-size: 122%;
   }
 }
`
export default Body;