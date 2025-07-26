// src/js/main.js

// Importa o arquivo CSS principal (essencial para carregar os estilos do Tailwind)
import "/src/css/style.css";

// Remove importações e código do template padrão do Vite que não são mais usados:
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// Remove o código que injeta HTML no #app, pois o HTML já está no index.html:
/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
*/

// Remove a chamada para setupCounter, pois não há mais contador:
// setupCounter(document.querySelector('#counter'))

// Mensagem de console para confirmar que o script está carregando
console.log("Projeto de Bio da Luísa Romanha carregado com sucesso!");
