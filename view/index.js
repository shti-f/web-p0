const html = require('choo/html')

const header = require('./header')
const page = require('./page')
const footer = require('./footer')

module.exports = function(state, emit){
  return html`
    <body class="root">
      ${header()}
      ${page()}
      ${footer()}
    </body>
  `
}