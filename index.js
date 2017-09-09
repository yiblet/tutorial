var express = require('express')
var remarkable = require('express-remarkable')
var app = express()

app.engine('md', remarkable(app));
app.set('views', '.');
app.set('view engine', 'md');

function sendWebpage(request, response) {
  response.render('README');
}

app.get('/', sendWebpage)

app.listen('3000', () => {
  console.log('server is now running');
  console.log('go to http://localhost:3000 to see the output')
})