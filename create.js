let toppings = {pepperoni: false, pineapple: false, canadian_bacon: false, peppers: false, jalapeno: false, sausage: false}

let cards = document.getElementsByClassName("Ingredient_card");

for(i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(event) {editToppings(event)});
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

}

function submitPizza(){
    let input = document.getElementById('Description').value;
    let newPizza = new pizza(input);
    let gallery = [];
    let allPizzas = localStorage.getItem("pizzas");
    if(allPizzas){
        gallery = JSON.parse(allPizzas);
    }
    gallery.push(newPizza);
    localStorage.setItem("pizzas", JSON.stringify(gallery))
}