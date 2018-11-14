const html = require('choo/html')

module.exports = function header(state, emit){
  return html`
    <div class='header'>
      <div class='link'><a href='/'>to index</a></div>
      <div class='link'><a href='/content'>to content</a></div>
    </div>
  `
}