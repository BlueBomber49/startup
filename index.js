if(!localStorage.getItem("guestCount")){
    localStorage.setItem("guestCount", 1);
}

localStorage.removeItem("Username");

function login(){
    let username = document.getElementById("Username").value;

    if(username !== ""){
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