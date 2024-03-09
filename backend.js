const express = require('express');
const res = require('express/lib/response');
const app = express();

app.use(express.static('Public'))

port = 4000;

app.listen(port)

console.log(`Listening on port ${port}`)

var pizzaRouter = express.Router();

//app.command('url_path', (req, res) => {function})

var storedPizzas =  []
storedPizzas = JSON.stringify(storedPizzas)

app.get('/pizzas', (_req, res) =>{
    res.send(storedPizzas);
})

app.post('/submission', (req, res) => {
    addPizza(req.body);
    res.send(storedPizzas)
})

function addPizza(pizza){
    storedPizzas.push(pizza)

}