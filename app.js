// console.log('express-blog-intro')

// importo l'array di oggetti
const blogPosts = require('./blog-posts.js')
// console.log(blogPosts)

// importo express
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('images'))  // rendo accessibile al server la cartella images 

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.listen(port, () => {
    console.log(`Il server del mio blog è in ascolto della porta: ${port}`)
})