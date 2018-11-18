const html = require('choo/html')
// const css = require('sheetify')

// const scope = css('./footer.css')

module.exports = function footer(state, emit){
  return html`
    <div class='footer'>Copyright (c) 2018 shti-f</div>
  `
}