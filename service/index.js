const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js')
app.use(express.static('public'))
app.use(express.json())

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cookieParser());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


//Working
apiRouter.post('/register', async (_req, res) =>{
    DB.addUser(_req.body.Username, _req.body.Password)
    return;
})

//Working
apiRouter.post('/login', async (_req, res) =>{
    const user = await DB.getUser(_req.body.Username);
  if (user) {
    if (await bcrypt.compare(_req.body.Password, user.Password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
})

apiRouter.delete('/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });



//Get pizzas
apiRouter.get('/pizzas', async (_req, res) =>{
    res.send(await DB.getPizzas());
});

//Worked before adding secureApiRouter
//Add pizza
apiRouter.post('/submission', async (req, res) => {
    await DB.addNewPizza(req.body);
});

//Should serve up the default file
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });



  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }  


const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);