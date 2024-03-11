if(!localStorage.getItem("guestCount")){
    localStorage.setItem("guestCount", 1);
}

localStorage.removeItem("Username");

function login(){
    let username = document.getElementById("Username").value;

    if(username){
        localStorage.setItem("Username", username);
        console.log(username);
    }

    else{
        let num = localStorage.getItem("guestCount"); 
        username = "Guest " + num;
        localStorage.setItem("Username", username);
        num ++;
        localStorage.setItem("guestCount", num);
    }
    
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