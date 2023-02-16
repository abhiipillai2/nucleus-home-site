const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000 //must for production environmentnpm install dotenv --save

//must use body parser for decoding the params from the url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


//front-end pusher
//index-sat-files
app.use(express.static('public'))
app.use('/public', express.static(__dirname + 'public/index.css'))
app.use('/public', express.static(__dirname + 'public/grid-index.css'))
app.use('/public', express.static(__dirname + 'public/index.js'))

//img-sat-files
app.use('/img', express.static(__dirname + 'public/img/logo-web.png'))
app.use('/img', express.static(__dirname + 'public/img/logo2.png'))
app.use('/img', express.static(__dirname + 'public/img/logo3.png'))
app.use('/img', express.static(__dirname + 'public/img/favcon.png'))

//general routes
app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')

});

console.log("app started")
app.listen(port);
