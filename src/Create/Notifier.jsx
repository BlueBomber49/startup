import React from 'react';

export function Notifier(){

    let [allMessages, setMessages] = React.useState('')

    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

function notify(msg){
    allMessages = allMessages + " " + msg
    setMessages(allMessages)
}

socket.onmessage = async (message) =>{
    message = JSON.parse(await message.data.text())
    let outmessage;
    if(message.type === "NewUser"){
        outmessage = "Everybody say hi to " + localStorage.getItem('Username') + "!"
    } else if(message.type === "NewPizza"){
        outmessage = localStorage.getItem('Username') + " just made a new pizza!"
    }
    notify(outmessage)
}

return (<div id = "notifications">{allMessages}</div>)

}