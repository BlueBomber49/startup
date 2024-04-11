import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'

export function Create() {

    const navigate = useNavigate();

    function submitPizza(){
        navigate('/galleria')
    }

  return (
<main>
        <div className="left_column">
            <div className ="Ingredient_card" id="Pepperoni">
                <img src="https://www.usatoday.com/gcdn/media/2021/02/02/USATODAY/usatsports/247WallSt.com-247WS-835626-imageforentry145.jpg?crop=1365,768,x0,y0"/>
                Pepperoni</div>
            <div className ="Ingredient_card" id="Pineapple">
                <img src="https://as2.ftcdn.net/v2/jpg/02/71/58/03/1000_F_271580324_bdy4peA9LhUWaECDQFBPG9sBqtD5SoTt.jpg"/>
                Pineapple</div>
            <div className ="Ingredient_card" id="Canadian_Bacon">
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
            <div id = "notifications">

            </div>
            <p id="I-tracker">Toppings: None</p>

            <div className="Canvas">
                <img id="Crust" src="Assets/Pizza canvas.png"/>

                <img id="img_Canadian_Bacon" className="hide Ingredient" src="Assets/Canadian_Bacon_topping.png"/>
                <img id="img_Peppers" className="hide Ingredient" src="Assets/Peppers_topping.png"/>
                <img id="img_Jalapeno" className="hide Ingredient" src="Assets/Jalapeno_topping.png"/>
                <img id="img_Pineapple" className="hide Ingredient" src="Assets/Pineapple_topping.png"/>
                <img id="img_Sausage" className="hide Ingredient" src="Assets/Sausage_topping.png"/>
                <img id="img_Pepperoni" className="hide Ingredient" src="Assets/Pepperoni_topping.png"/>

            </div>

            <p>Pizza description:</p>
            <input id="Description"></input>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => submitPizza()}>Display</button>
            </div>
        </div>

        <div className = "right_column">
            <div className ="Ingredient_card" id="Jalapeno">
                <img src="https://rolandfoods.com/product_images/45798-jalapeo-pepper-nacho-sliced-raw-600.png" />
                Jalapeno peppers</div>
            <div className ="Ingredient_card" id="Sausage">
                <img src="https://scm-assets.constant.co/scm/ahold/9a888e72fca371869e751ab34491d024/4790c985-d46a-475d-9d83-c85f3b0449bc.jpg"/>
                Italian sausage
            </div>
            <div className ="Ingredient_card" id="Peppers">
                <img src="https://images.eatthismuch.com/img/516766_basic_bob_346a16bc-c8b3-42ce-866f-1f59bd24985d.png"/>
                Peppers</div>

        </div>

    </main>
  );
}