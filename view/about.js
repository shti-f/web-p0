const html = require('choo/html')
const header = require('./header')
const footer = require('./footer')

const testPage = require('./page')

module.exports = function(state, emit){
  return html`
    <body class="root">
      ${header()}
      <div class="contentWrapper">
        <div class="about">this is aboutPage</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        <div>qwertyui</div>
        ${testPage()}
        <div>qwertyui</div>
      </div>
      ${footer()}
    </body>
  `
}