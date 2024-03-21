localStorage.removeItem("Username");

async function login(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    await fetch('/api/login', {
        method: 'GET',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            "Username" : username,
            "Password" : password
        }),
    })
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