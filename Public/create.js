let toppings = {pepperoni: false, pineapple: false, canadian_bacon: false, peppers: false, jalapeno: false, sausage: false}

let cards = document.getElementsByClassName("Ingredient_card");

let chatMessages = [];

for(i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(event) {editToppings(event)});
}



function setup(){
    let description = document.getElementById("Description");
        description.value = localStorage.getItem("Username");
        description.value += "'s Pizza";
}

function editToppings(event) {

    if(event.target.id === "Pepperoni" || event.target.parentNode.id === "Pepperoni"){
        toppings.pepperoni = !toppings.pepperoni;
        if(toppings.pepperoni){
            document.getElementById("img_Pepperoni").classList.remove('hide');
        } else{
            document.getElementById("img_Pepperoni").classList.add('hide')
        }
    }
    else if(event.target.id === "Pineapple" || event.target.parentNode.id === "Pineapple"){
        toppings.pineapple = !toppings.pineapple;
        if(toppings.pineapple){
            document.getElementById("img_Pineapple").classList.remove('hide');
        } else{
            document.getElementById("img_Pineapple").classList.add('hide')
        }
    }
    else if(event.target.id === "Canadian_Bacon" || event.target.parentNode.id === "Canadian_Bacon"){
        toppings.canadian_bacon = !toppings.canadian_bacon;
        if(toppings.canadian_bacon){
            document.getElementById("img_Canadian_Bacon").classList.remove('hide');
        } else{
            document.getElementById("img_Canadian_Bacon").classList.add('hide')
        }
    }
    else if(event.target.id === "Peppers" || event.target.parentNode.id === "Peppers"){
        toppings.peppers = !toppings.peppers;
        if(toppings.peppers){
            document.getElementById("img_Peppers").classList.remove('hide');
        } else{
            document.getElementById("img_Peppers").classList.add('hide')
        }
    }
    else if(event.target.id === "Jalapeno" || event.target.parentNode.id === "Jalapeno"){
        toppings.jalapeno = !toppings.jalapeno;
        if(toppings.jalapeno){
            document.getElementById("img_Jalapeno").classList.remove('hide');
        } else{
            document.getElementById("img_Jalapeno").classList.add('hide')
        }
    }
    else if(event.target.id === "Sausage" || event.target.parentNode.id === "Sausage"){
        toppings.sausage = !toppings.sausage;
        if(toppings.sausage){
            document.getElementById("img_Sausage").classList.remove('hide');
        } else{
            document.getElementById("img_Sausage").classList.add('hide')
        }
    }
    toppingsList = ""
    for(i in toppings){
        if(toppings[i]===true){
            if(i==="canadian_bacon"){
                i = "Canadian Bacon";
            } else{
                i = i[0].toUpperCase() + i.substr(1);
            }
            toppingsList += i + ", ";
        }
    }
    if(toppingsList === ""){
        toppingsList = "None";
    } else{
    toppingsList = toppingsList.substr(0, toppingsList.length - 2);
    }
    document.getElementById("I-tracker").innerHTML = "Toppings: " + toppingsList;

}


//Websocket functionality
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

async function notify(message){
    let newsBox = document.getElementById('notifications')
    newsBox.innerHTML = "<p>" + message + "</p>" + newsBox.innerHTML
}

socket.onmessage = () => {
    notify(message)
}

function broadcastNewPizza(user) {
    let message = user + " just made a new pizza!"
    socket.send(message);
    notify(message)
}

function broadcastArrival(user){
    let message = "Everybody say hi to " + user + "!"
    socket.send(message)
    notify(message)
}



class pizza{
    constructor (description){
        this.description = description;
        this.allToppings = toppings;
    }

    getDescription(){
        return this.description;
    }

    getToppings(){
        return this.allToppings
    }
    toJSON(){
        return {
            description: this.description,
            toppings: this.allToppings
        };
    }
}

async function submitPizza(){
    let user = localStorage.getItem('Username')
    broadcastNewPizza("test")
    let input = document.getElementById('Description').value;
    let newPizza = new pizza(input);
    let allPizzas;
     //Add pizza to server
    console.log(JSON.stringify(newPizza))
    allPizzas = await fetch('/api/submission', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newPizza),
      });
      allPizzas = await allPizzas.json()
    

    let gallery = [];
    if(allPizzas.length > 0){
        gallery = JSON.parse(allPizzas);
    }
    gallery.push(newPizza);
    localStorage.setItem("pizzas", JSON.stringify(gallery));
    localStorage.setItem("Username", "");
}

setup();

function displayFact(){
    
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/today?language=en')
    .then((response) => response.json())
    .then((data) => {
        const container = document.querySelector('#Fact')
        container.textContent = 'Fact of the Day: ' + data.text;
        localStorage.setItem('factOfDay', data.text)
    })
}

displayFact()