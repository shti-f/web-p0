const html = require('choo/html')
const header = require('./header')

module.exports = function(state, emit){
  return html`
    <body class="root">
      ${header()}
      <div class="content">this is centerized content</div>
    </body>
  `
}