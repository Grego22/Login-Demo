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

app.post('login', (request, response)=>{
	console.log('You are at the login page');
	response.render('/')
})

const authenticate = (request, response, next) =>{
	console.log('Que Pasa Javier!?!?!?! TODO BIEN?!?!?!');
	if(request.body.password === 'Iyard' && request.body.name === 'Grego'){
		next()
	}
	else{
		response.redirect('/')
	}
}

app.use(authenticate)

app.get('/', (request, response)=>{
	console.log('Trying to Log in');
	response.render('login')
})

app.post('login', (request, response)=>{
	console.log('You are at the login page');
	request.checkBody('name', 'Your name is needed to login').notEmpty()
	request.checkBody('password', 'Your password is needed to login').notEmpty()
	response.render('login')
})

app.listen(7777, function() {
	console.log('Looking good Billy Ray!!!')
})
