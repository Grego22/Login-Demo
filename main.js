const express  = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()
app.use(express.static('public'))

app.engine('mustache', mustacheExpress())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(expressValidator())

app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (request, response)=>{
	console.log('Maria Laura is the best!!!');
	response.render('index')
})

app.post('login', (request, resppnse)=>{
	console.log('You are at the login page');
	respone.render('/')
})

const authenticate = (request, resppnse, next) =>{
	console.log('Que Pasa Javier!?!?!?! TODO BIEN?!?!?!');
	if(request.body.password === 'Iyard' && request.body.name === 'Grego'){
		next()
	}
	else{
		redirect('/')
	}
}

app.use(authenticate)



















app.listen(7777, function() {
	console.log('Looking good Billy Ray!!!')
})
