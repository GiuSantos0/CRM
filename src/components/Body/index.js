import { createGlobalStyle } from 'styled-components'

const Body = createGlobalStyle`
body {
    background: #e6e6e6 url('${props => props.background}') no-repeat !important;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
    background-position: 81% 1%;
}
`
export default Body;