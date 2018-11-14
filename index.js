const choo = require('choo')
const log = require('choo-log')
const html = require('choo/html')

const header = require('./view/header')
const page = require('./view/page')
const footer = require('./view/footer')

const app = choo()

app.use(log())

const main = function(state, emit){
  return html`
    <body class="root">
      ${header()}
      ${page()}
      ${footer()}
    </body>
  `
}

app.route('/', main)

app.mount('body')