const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

// app.get('/', (req, res) => {
//   res.render('index')
// })

app.get('/', (req, res) => {
  const buah = [
    {name: 'apel'},
    {name: 'semangka'},
    {name: 'durian'}
  ]
  res.render('index',{
    name: 'John Doe',
    job: 'Frontend Developer',
    buah: buah
  })
})
app.get('/:name',(req,res) => res.send(`Nama saya : ${req.params.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))