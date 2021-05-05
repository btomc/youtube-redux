import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: #16181b;
        background-attachment: fixed;
        color: #b1bdb4;
        letter-spacing: 0.1px;

        ::-webkit-scrollbar {
            width: 0px
        }
    }    
`

export default GlobalStyle