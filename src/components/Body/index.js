import { createGlobalStyle } from 'styled-components'

const Body = createGlobalStyle`
body {
    background: #FFF url('${props => props.background}') no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
    background-position: 81% 1%;
}
`
export default Body;