const express = require('express')

const app = express();

app.get('/', (req,res) => {
    res.json([
        {id: 1, nome: 'joão'},
        {id: 2, nome: 'Maria'}
    ])
})