const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db =  client.db('TheVault');
const userData = db.collection('Users');
const pizzaData = db.collection('Pizzas');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});


async function addNewPizza(pizza) {
  pizzaData.insertOne(pizza);
  pizzaArray = await pizzaData.find().toArray()
  while(pizzaArray.length > 14){
    pizzaData.findOneAndDelete({});
    pizzaArray = await pizzaData.find().toArray()
  }
}

function getPizzas(){
  const query = {}
  const options = {
    limit: 15,
  };
  return pizzaData.find(query, options).toArray();
}

async function addUser(username, password){
  const hashword = await bcrypt.hash(password, 10);
  const user = {
    'Username' : username,
    'Password' : hashword,
    'Token' : uuid.v4(),
  }

  await userData.insertOne(user);
  return user;
}

async function getUser(username){
  const existsUser = await userData.findOne({'Username' : username});
  if(existsUser){
    return existsUser
  } else{
    return null
  }
}

function getUserByToken(token) {
  return userData.findOne({ token: token });
}





module.exports = {
  addNewPizza,
  getPizzas,
  addUser,
  getUser,
  getUserByToken
};