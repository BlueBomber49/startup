const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

export function broadcastNewPizza() {
    let message = JSON.stringify({type: "NewPizza"})
    socket.send(message);
}

socket.onopen = async () => {
    let message = JSON.stringify({type: "NewUser"})
    socket.send(message)
}