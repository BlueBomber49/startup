const express = require('express');
const app = express();

app.use(express.static('Public'))
app.use(express.json())

const port = process.argv.length > 2 ? process.argv[2] : 4000;

var storedPizzas =  []
storedPizzas = JSON.stringify(storedPizzas)

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/pizzas', (_req, res) =>{
    res.send(storedPizzas);
})

apiRouter.post('/submission', (req, res) => {
    console.log(req.body)
    addPizza(req.body);
    res.send(storedPizzas)
})




app.listen(port)

console.log(`Listening on port ${port}`)

function addPizza(pizza){
    storedPizzas = JSON.parse(storedPizzas)
    storedPizzas.push(pizza)
    console.log(storedPizzas)
    storedPizzas = JSON.stringify(storedPizzas)
}

