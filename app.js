const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const { report } = require('process');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(express.static('public'));

const port = 3300;

app.get('/', (req, res)=> {
    res.render('index', {title: "Paulie"});
})
app.get('/contact', (req, res)=> {
    res.render('contact', {mailto:"jean-baptiste@pop.eu.com"});
})
app.get('/blog', (req, res)=> {
    res.render('blog');
})
app.get('/blog/:id', (req, res)=> {
    const id = req.params.id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resAxio =>{
        res.render('article', {post: resAxio.data});
    })
})

app.listen(port, ()=> {
    console.log(`App running on http://localhost:${port}`)
})