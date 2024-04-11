import React from 'react';
import './Main.css'

export function Main({auth, changeAuth}) {

    function authenticate(){
        if(!auth){
        changeAuth(true);
        } else changeAuth(false);
}

  return (
    <main>
    <div className="home_img">
        <img src="https://www.eatingwell.com/thmb/k3RhYf4XhAeqAejYjdInOlSOp6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg" />
    </div>
    <div>
    <h3>Login</h3>
    <div id="message_box"></div>
    <p>Username <input id="Username" /></p>
    <p>Password <input type="password" id = "Password"/></p>
    {auth === false &&(
        <button type="button" input-type = "submit" className="btn btn-primary login/register" onClick={() => authenticate()}>Login</button>
    )}
    {auth === false &&(
        <button type="button" input-type = "submit" className="btn btn-primary login/register" onClick={() => authenticate()}>Register</button>
    )}
    {auth === true &&(
        <button type="button" input-type = "submit" className="btn btn-primary logout/create" onClick={() => authenticate()}>Make a pizza!</button>
    )}
    {auth === true &&(
        <button type="button" input-type = "submit" className="btn btn-primary logout/create" onClick={() => authenticate()}>Logout</button>
    )}
        </div>
</main>
  );
}