const html = require('choo/html')

module.exports = function header(state, emit){
  return html`
    <div class='header'>
      <div class="menu">
        <div class='menuTab'><a href='/'>Top</a></div>
        <div class='menuTab'><a href='/about'>About</a></div>
        <div class='menuTab'><a href='/content'>Content</a></div>
        <div class='menuTab'><a href='/contact'>Contact</a></div>
      </div>
    </div>
  `
}
