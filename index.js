const choo = require('choo')
const log = require('choo-log')
const html = require('choo/html')

const app = choo()

app.use(log())

app.route('/', require('./view/index'))
app.route('/about', require('./view/about'))
app.route('/content', require('./view/content'))
app.route('/contact', require('./view/contact'))

app.mount('body')