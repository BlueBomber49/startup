

class pizza{
    constructor (description, toppings){
        this.description = description;
        this.allToppings = toppings;
    }

    getDescription(){
        return this.description;
    }

    getToppings(){
        return this.allToppings
    }

}



function pizzaToCard (displayPizza){
    let html = "<div class='card'><div class='Canvas'><img class='Crust' src='Assets/Pizza canvas.png'/>";

    let toppings = displayPizza.getToppings();

    if(toppings.canadian_bacon){
        html += "<img id='img_Canadian_Bacon' class='Ingredient' src='Assets/Canadian_Bacon_topping.png'/>"
    }
    if(toppings.peppers){
        html += "<img id='img_Peppers' class='Ingredient' src='Assets/Peppers_topping.png'/>"
    }
    if(toppings.jalapeno){
        html += "<img id='img_Jalapeno' class='Ingredient' src='Assets/Jalapeno_topping.png'/>"
    }
    if(toppings.pineapple){
        html += "<img id='img_Pineapple' class='Ingredient' src='Assets/Pineapple_topping.png'/>"
    }
    if(toppings.sausage){
        html += "<img id='img_Sausage' class='Ingredient' src='Assets/Sausage_topping.png'/>"
    }
    if(toppings.pepperoni){
        html += "<img id='img_Pepperoni' class='Ingredient' src='Assets/Pepperoni_topping.png'/>"
    }

    html += "</div><p>" + displayPizza.getDescription() + "</p></div>"
    
    return html;

}

let pizzaList;
async function populate(){

    pizzaList = await fetch('/api/pizzas')
    pizzaList = await pizzaList.json()

        

    for(i in pizzaList){
        currPizza = pizzaList[i];
        pizzaList[i] = new pizza(currPizza.description, currPizza.toppings); 
    }
    let pizzaData = "";

    for(i in pizzaList){
        pizzaData += pizzaToCard(pizzaList[i]);
    }

    if(!pizzaData){
        pizzaData = "<p/><h1>Get out there and make some pizzas!</h1>"
    } 

    document.getElementsByClassName("container")[0].innerHTML = pizzaData;
}

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


populate();
