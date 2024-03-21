const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');

app.use(express.static('public'))
app.use(express.json())

const port = process.argv.length > 2 ? process.argv[2] : 4000;


var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/register', async (_req, res) =>{
    DB.addUser(_req.body.Username, _req.body.Password)
})


//Get pizzas
apiRouter.get('/pizzas', async (_req, res) =>{
    res.send(await DB.getPizzas());
});


//Add pizza
apiRouter.post('/submission', async (req, res) => {
    await DB.addNewPizza(req.body);
});

//Should serve up the default file
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });


app.listen(port)

console.log(`Listening on port ${port}`)

