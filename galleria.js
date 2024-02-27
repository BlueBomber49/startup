let dummy_toppings = {pepperoni: true, pineapple: false, canadian_bacon: false, peppers: false, jalapeno: false, sausage: false}

class pizza{
    constructor (description){
        this.description = description;
        this.allToppings = dummy_toppings;
    }

    getDescription(){
        return this.description;
    }

    getToppings(){
        return this.allToppings
    }

}
let pizza1 = new pizza("Pizza 1");
let pizza2 = new pizza("Pizza 2");
let pizza3 = new pizza("Pizza 3");
pizzaList = [pizza1, pizza2, pizza3];

function pizzaToCard (displayPizza){
    let html = "<div class='card'><div class='Canvas'><img class='Crust' src='Pizza canvas.png'/>";

    let toppings = displayPizza.getToppings()

    if(toppings.canadian_bacon){
        html += "<img id='img_Canadian_Bacon' class='Ingredient' src='Canadian_Bacon_topping.png'/>"
    }
    if(toppings.peppers){
        html += "<img id='img_Peppers' class='Ingredient' src='Peppers_topping.png'/>"
    }
    if(toppings.jalapeno){
        html += "<img id='img_Jalapeno' class='Ingredient' src='Jalapeno_topping.png'/>"
    }
    if(toppings.pineapple){
        html += "<img id='img_Pineapple' class='Ingredient' src='Pineapple_topping.png'/>"
    }
    if(toppings.sausage){
        html += "<img id='img_Sausage' class='Ingredient' src='Sausage_topping.png'/>"
    }
    if(toppings.pepperoni){
        html += "<img id='img_Pepperoni' class='Ingredient' src='Pepperoni_topping.png'/>"
    }

    html += "</div><p>" + displayPizza.getDescription() + "</p></div>"
    
    return html;
    
}
function populate(){
    let pizzaData = "";

    for(i in pizzaList){
        pizzaData += pizzaToCard(pizzaList[i]);
    }

    if(!pizzaData){
        pizzaData = "<p/><h1>Get out there and make some pizzas!</h1>"
    } 

    document.getElementsByClassName("container")[0].innerHTML = pizzaData;
}

populate();
