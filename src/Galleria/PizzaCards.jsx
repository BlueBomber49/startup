import React from 'react';
import {Markup} from 'interweave'

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
export function PizzaCardList(){
    function pizzaToCard (displayPizza){
        console.log(displayPizza)
        let html = "<div class='Card'><div class='canvas'><img class='Crust' src='/Pizza_canvas.png'/>";
        let toppings = displayPizza.getToppings();
        if(toppings.canadian_bacon){
            html += "<img id='img_Canadian_Bacon' class='Ingredient' src='/Canadian_Bacon_topping.png'/>"
        }
        if(toppings.peppers){
            html += "<img id='img_Peppers' class='Ingredient' src='/Peppers_topping.png'/>"
        }
        if(toppings.jalapeno){
            html += "<img id='img_Jalapeno' class='Ingredient' src='/Jalapeno_topping.png'/>"
        }
        if(toppings.pineapple){
            html += "<img id='img_Pineapple' class='Ingredient' src='/Pineapple_topping.png'/>"
        }
        if(toppings.sausage){
            html += "<img id='img_Sausage' class='Ingredient' src='/Sausage_topping.png'/>"
        }
        if(toppings.pepperoni){
            html += "<img id='img_Pepperoni' class='Ingredient' src='/Pepperoni_topping.png'/>"
        }

        html += "</div><p>" + displayPizza.getDescription() + "</p></div>"
        return html;
    }

    let [pizzaList, setPizzaList] = React.useState([]);

    React.useEffect(() => {
    fetch('/api/pizzas')
    .then((response) => response.json())
    .then((response) => {
        pizzaList = response
        setPizzaList(response)
        console.log(pizzaList)
    })
    }
    , []);


   for(let i in pizzaList){
        let currPizza = pizzaList[i];
        pizzaList[i] = new pizza(currPizza.description, currPizza.toppings); 
    }
    let pizzaData = "";

    for(let i in pizzaList){
        pizzaData += pizzaToCard(pizzaList[i]);
    }

    return <Markup content={pizzaData} tagName='div' className='container' allowAttributes/>

}