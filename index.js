const express = require('express');
const app = express();

app.use(express.static('Public'))
app.use(express.json())

const port = process.argv.length > 2 ? process.argv[2] : 4000;

var storedPizzas =  []
storedPizzas = JSON.stringify(storedPizzas)

app.get('/pizzas', (_req, res) =>{
    res.send(storedPizzas);
})

app.post('/submission', (req, res) => {
    console.log(req.body)
    addPizza(req.body);
    res.send(storedPizzas)
})


//Should serve up the default file
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

app.listen(port)

console.log(`Listening on port ${port}`)

function addPizza(pizza){
    storedPizzas = JSON.parse(storedPizzas)
    storedPizzas.push(pizza)
    console.log(storedPizzas)
    storedPizzas = JSON.stringify(storedPizzas)
}

