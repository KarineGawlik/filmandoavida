import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: "DM Sans", sans-serif;
  box-sizing: border-box;
}

html {
    font-size: 12px;
  }
`

export default EstiloGlobal