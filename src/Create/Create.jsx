import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'
import {pizza} from './Pizza.js'
import {Markup} from 'interweave'
import {Notifier} from './Notifier.jsx'
import {broadcastNewPizza} from './Messages.js'

export function Create(username) {
   
    const [pepperoniState, setPepperoni] = React.useState(false);
    const [pineappleState, setPineapple] = React.useState(false);
    const [canadianBaconState, setBacon] = React.useState(false);
    const [peppersState, setPeppers] = React.useState(false);
    const [jalapenoState, setJalapeno] = React.useState(false);
    const [sausageState, setSausage] = React.useState(false);
    const [descriptionText, setDescription] = React.useState('')
    
    let toppings = {pepperoni: pepperoniState, pineapple: pineappleState, canadian_bacon: canadianBaconState,
        peppers: peppersState, jalapeno: jalapenoState, sausage: sausageState}


    function modifyIngredient(type){
        if(type == 'pepperoni'){
            setPepperoni(!pepperoniState);
        } else if(type == 'peppers'){
            setPeppers(!peppersState);
        } else if(type == 'pineapple'){
            setPineapple(!pineappleState);
        } else if(type == 'canadianBacon'){
            setBacon(!canadianBaconState);
        } else if(type == 'sausage'){
            setSausage(!sausageState);
        } else if(type == 'jalapeno'){
            setJalapeno(!jalapenoState);
        }
        console.log(username)
    }

    const navigate = useNavigate();

    async function submitPizza(){
        broadcastNewPizza()
        let pizzaToSubmit = new pizza(descriptionText, toppings)
        console.log(pizzaToSubmit)
        await fetch('/api/submission', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(pizzaToSubmit),
          })
          .then(navigate('/galleria'))

    }

  return (
<main>
        <div className="left_column">
            <div className ="Ingredient_card" id="Pepperoni" onClick={() => modifyIngredient('pepperoni')}>
                <img src="https://www.usatoday.com/gcdn/media/2021/02/02/USATODAY/usatsports/247WallSt.com-247WS-835626-imageforentry145.jpg?crop=1365,768,x0,y0"/>
                Pepperoni</div>
            <div className ="Ingredient_card" id="Pineapple" onClick={() => modifyIngredient('pineapple')}>
                <img src="https://as2.ftcdn.net/v2/jpg/02/71/58/03/1000_F_271580324_bdy4peA9LhUWaECDQFBPG9sBqtD5SoTt.jpg"/>
                Pineapple</div>
            <div className ="Ingredient_card" id="Canadian_Bacon" onClick={() => modifyIngredient('canadianBacon')}>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-5d77ce42480e9884dc123d6e0ba62219-lq"/>
                Canadian Bacon</div>
        </div>

        <div className="center_column">
            <h2>Create a pizza</h2>
            <hr />
            <p>To create a pizza, simply click the toppings you wish to add to your pizza.
                Once finished, click "Display" to send your pizza to the galleria!
            </p>
            <hr />
            Hot off the press: 
            <Notifier/>

            <div className="Canvas">
                <img id="Crust" src="assets/Pizza_canvas.png"/>

                {canadianBaconState && (
                <img id="img_Canadian_Bacon" className="hotIngredient" src="assets/Canadian_Bacon_topping.png"/>
                )}
                {peppersState && (
                <img id="img_Peppers" className="hotIngredient" src="assets/Peppers_topping.png"/>
                )}
                {jalapenoState && (
                <img id="img_Jalapeno" className="hotIngredient" src="assets/Jalapeno_topping.png"/>
                )}
                {pineappleState && (
                <img id="img_Pineapple" className="hotIngredient" src="assets/Pineapple_topping.png"/>
                )}
                {sausageState && (
                <img id="img_Sausage" className="hotIngredient" src="assets/Sausage_topping.png"/>
                )}
                {pepperoniState && (
                <img id="img_Pepperoni" className="hotIngredient" src="assets/Pepperoni_topping.png"/>
                )}
            </div>

            <p>Pizza description:</p>
            <input id="Description" placeholder='Your description here' onChange={(e) => setDescription(e.target.value)}></input>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => submitPizza()}>Display</button>
            </div>
        </div>

        <div className = "right_column">
            <div className ="Ingredient_card" id="Jalapeno" onClick={() => modifyIngredient('jalapeno')}>
                <img src="https://rolandfoods.com/product_images/45798-jalapeo-pepper-nacho-sliced-raw-600.png" />
                Jalapeno peppers</div>
            <div className ="Ingredient_card" id="Sausage" onClick={() => modifyIngredient('sausage')}>
                <img src="https://scm-assets.constant.co/scm/ahold/9a888e72fca371869e751ab34491d024/4790c985-d46a-475d-9d83-c85f3b0449bc.jpg"/>
                Italian sausage
            </div>
            <div className ="Ingredient_card" id="Peppers" onClick={() => modifyIngredient('peppers')}>
                <img src="https://images.eatthismuch.com/img/516766_basic_bob_346a16bc-c8b3-42ce-866f-1f59bd24985d.png"/>
                Peppers</div>

        </div>

    </main>
  );
}