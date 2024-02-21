let toppings = {pepperoni: false, pineapple: false, canadian_bacon: false, peppers: false, jalapeno: false, sausage: false}

let cards = document.getElementsByClassName("Ingredient_card");

for(i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(event) {editToppings(event)});
}

function editToppings(event) {
    let current_card;
    if(event.target.id === "Pepperoni" || event.target.parentNode.id === "Pepperoni"){
        toppings.pepperoni = !toppings.pepperoni;
    }
    if(event.target.id === "Pineapple" || event.target.parentNode.id === "Pineapple"){
        toppings.pineapple = !toppings.pineapple;
    }
    if(event.target.id === "Canadian_Bacon" || event.target.parentNode.id === "Canadian_Bacon"){
        toppings.canadian_bacon = !toppings.canadian_bacon;
    }
    if(event.target.id === "Peppers" || event.target.parentNode.id === "Peppers"){
        toppings.peppers = !toppings.peppers;
    }
    if(event.target.id === "Jalapeno" || event.target.parentNode.id === "Jalapeno"){
        toppings.jalapeno = !toppings.jalapeno;
    }
    if(event.target.id === "Sausage" || event.target.parentNode.id === "Sausage"){
        toppings.sausage = !toppings.sausage;
    }
    toppingsList = ""
    for(i in toppings){
        if(toppings[i]===true){
            toppingsList += i + ", "
        }
    }
    if(toppingsList === ""){
        toppingsList = "None";
    } else{
    toppingsList = toppingsList.substr(0, toppingsList.length - 2);
    }
    document.getElementById("I-tracker").innerHTML = "Toppings: " + toppingsList;


}