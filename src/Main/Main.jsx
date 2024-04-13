import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css'

export function Main({auth, changeAuth, username, setUsername}) {

    const navigate = useNavigate();
    let [password, setPassword] = React.useState('');
    let [message, setMessage] = React.useState('')

    async function register(){
        if(!username || !password){
            setMessage('Please enter a username and password');
            return;
        }
        setMessage('Registered new user')
        let response = await fetch('/api/register', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                "Username" : username,
                "Password" : password
            }),
        })
        
}
    function logout(){
        changeAuth(false);
        setMessage('Logged Out')
    }


    async function login(){
        localStorage.setItem('Username', username)
        let response = await fetch('/api/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            "Username" : username,
            "Password" : password
        }),
        })
        if(response.status != 401) {
            setMessage('Login Successful')
            changeAuth(true)
        } else{
            setMessage('Your credentials were not recognized, please try again')
        }
    }

  return (
    <main>
    <div className="home_img">
        <img src="https://www.eatingwell.com/thmb/k3RhYf4XhAeqAejYjdInOlSOp6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg" />
    </div>
    <div>
    <h3>Login</h3>
    <div id="message_box">{message}</div>
    <p>Username <input id="Username" onChange={(e) => {setUsername(e.target.value)}}/></p>
    <p>Password <input type="password" id = "Password" onChange={(e) => setPassword(e.target.value)}/></p>
    {auth === false &&(
        <button type="button" input-type = "submit" className="btn btn-primary login/register" onClick={() => login()}>Login</button>
    )}
    {auth === false &&(
        <button type="button" input-type = "submit" className="btn btn-primary login/register" onClick={() => register()}>Register</button>
    )}
    {auth === true &&(
            <button type="button" input-type = "submit" className="btn btn-primary logout/create" onClick={() => navigate("/create")}>Make a pizza!</button>
    )}
    {auth === true &&(
        <button type="button" input-type = "submit" className="btn btn-primary logout/create" onClick={() => logout()}>Logout</button>
    )}
        </div>
</main>
  );
}