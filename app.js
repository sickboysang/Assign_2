//imports
const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const port = 3000



// Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+ 'public/css'))
app.use('/js',express.static(__dirname+ 'public/js'))
app.use('/img',express.static(__dirname+ 'public/img'))


//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('',(req,res) => {
    res.render('index', { text: '19 dollar fortnite card'})
})

app.get('/about',(req,res) => {
    res.render('about', { text: 'HELLO'})
})












// Listen on port 3000
app.listen(port, () => console.info(` Listening on port ${port} ` ))
