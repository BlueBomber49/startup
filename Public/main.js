
async function login(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    if(!username || !password){
        document.getElementById('message_box').innerText = "Please input a username and password"
        return;
    }
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

    await fetch('/logout')

    document.getElementById('message_box').innerText = "Logged out"
        document.getElementById('mainmenu').className = "hidden"
        var loginbuttons = document.getElementsByClassName('login/register')
        var logoutbuttons = document.getElementsByClassName('logout/create')
        for(var i = 0; i < loginbuttons.length; i++){
            loginbuttons[i].className = 'btn btn-primary login/register'
        }
        for(var i = 0; i < logoutbuttons.length; i++){
            logoutbuttons[i].className += " hidden"
        }
    document.getElementById('Username').value = ""
    document.getElementById('Password').value = ""
}

async function registerUser(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    if(!username || !password){
        document.getElementById('message_box').innerText = "Please input a username and password"
        return;
    }
    document.getElementById('message_box').innerText = "Registered new user";
    await fetch('/api/register', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            "Username" : username,
            "Password" : password
        }),
    })
    login()
}

function changeWindow(){
    window.location.href = "/create.html"
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