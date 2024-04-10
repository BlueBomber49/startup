import React from 'react';
import './Main.css'

export function Main() {
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
        <button type="button" input-type = "submit" className="btn btn-primary login/register" onclick="login()">Login</button>
        <button type="button" input-type = "submit" className="btn btn-primary login/register" onclick="registerUser()">Register</button>
        <button type="button" input-type = "submit" className="btn btn-primary logout/create hidden" onclick="changeWindow()">Make a pizza!</button>
        <button type="button" input-type = "submit" className="btn btn-primary logout/create hidden" onclick="logout()">Logout</button>
    </div>
</main>
  );
}