const path = require('path')
const express = require('express')
const hbs = require('hbs')

// Create express application
const app = express()

// Define paths for Express config 
const publicDirectoryName = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryName))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        creator: 'Ajeet Eppakayala'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        creator: 'Ajeet Eppakayala'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        descp: 'Get help here'
    })
})

app.get('/anime', (req, res) => {
    res.send([{
        name: 'Dragon Ball Z',
        Hero: 'Goku'
    }, {
        name: 'Tokyo Ghoul',
        hero: 'Kaneki'
    }])
})

app.listen(3000, () => {
    console.log('Listening server on port 3000...')
})