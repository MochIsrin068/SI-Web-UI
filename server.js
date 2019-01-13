// Require Path
const path = require('path')

// Load library  / Routing Express
const express = require('express')

// Load Body Parser
const bodyParser = require('body-parser')

// load Data JSON
const data = require('./models/items.json')
const user = require('./models/users.json')

const app = express()

// Stup Views Engine HBS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Midle ware Static For Call File

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static('public'))

// Routing
app.get('/', (request, response) => {
    response.render('index', {
        items: data,
        users: user
    })
})

app.get('/detail/:id', (req, res) => {
    const item = data.find(d => {
        return d.id === parseInt(req.params.id)
    })
    res.render('detail', {
        item: item
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    res.render('login', {
        nama: req.body.nama,
        password: req.body.password
    })
})

app.listen(5000, () => {
    console.log('saya mempunyai server http://127.0.0.1:5000/')
})