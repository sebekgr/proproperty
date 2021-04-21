import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding:0;
        margin:0;

    }
    html {
        font-size:62.5%;
    }
    body {
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.6em;
    }
    button {
        cursor: pointer;
        background: none;
        border: 0;
    }
    ul {
        list-style: none;
    }
`