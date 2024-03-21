async function login(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let response = await fetch('/api/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            "Username" : username,
            "Password" : password
        }),
    })
    if(response.status != 401){
        document.getElementById('message_box').innerText = "Login successful"
        document.getElementById('mainmenu').className = "shown"
        var loginbuttons = document.getElementsByClassName('login/register')
        var logoutbuttons = document.getElementsByClassName('logout/create')
        for(var i = 0; i < loginbuttons.length; i++){
            loginbuttons[i].className += ' hidden'
        }
        for(var i = 0; i < logoutbuttons.length; i++){
            logoutbuttons[i].className = 'btn btn-primary logout/create'
        }

            
        
    }
    else{
        document.getElementById('message_box').innerText = "Your credentials were not recognized, please try again"
    }

}

async function logout(){

}

async function registerUser(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    await fetch('/api/register', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            "Username" : username,
            "Password" : password
        }),
    })
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