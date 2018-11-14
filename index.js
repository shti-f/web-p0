const choo = require('choo')
const log = require('choo-log')
const html = require('choo/html')

const app = choo()

app.use(log())

app.route('/', require('./view/index'))
app.route('/content', require('./view/content'))

app.mount('body')