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

/*
var limit = 1;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
*/