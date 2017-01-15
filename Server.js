var express = require('express')
var app = express()
require('nunjucks').configure('views', {
    autoescape: true,
    express: app
});
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.render('index.html', {name: 'Kyle'})
})
app.get('/foo', function (req, res) {
  res.send('Butt')
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})