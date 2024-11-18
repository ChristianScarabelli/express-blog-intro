// console.log('express-blog-intro')

// importo l'array di oggetti
const blogPosts = require('./blog-posts.js')
// console.log(blogPosts)

// importo express
const express = require('express')
const app = express()
const port = 3000

// rendo accessibile al server la cartella images 
app.use(express.static('images'))

// creo la rotta principale del mio server
app.get('/', (req, res) => {
    res.send('Server del mio blog')   // con Axios res.data per avere i dati 
})

// creo la rotta bacheca che mi stampi in pagina il json dei post
app.get('/bacheca', (req, res) => {
    res.json({                      // restituisco un json  
        posts: blogPosts,           // array dei post
        count: blogPosts.length     // conteggio dei post (lunghezza dell'array)
    })
})

// inizializzo il server
app.listen(port, () => {
    console.log(`Il server del mio blog è in ascolto della porta: ${port}`)
})

