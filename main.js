const express  = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

app.engine('mustache', mustacheExpress())

app.listen(7777, function() {
	console.log('Looking good Billy Ray!!!')
})
