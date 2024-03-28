# Startup
Startup website code for CS 260.

[Class notes](notes.md)

### Elevator Pitch
Do you ever feel like your stuck in a rut?  You keep eating the same boring old pepperoni pizza without any sort of edge or excitement to it?  Do you feel like your pizza parties lack pizzazz?  With Tony's Pizza Galleria, you can get inspiration for new pizza creations.  Innovate new pizza designs with the pizza creator, or browse the galleria of your friend's latest creations!  Stay on the cutting edge of pizza innovation with Tony's Pizza Galleria!

### Key features
- Securely login using HTTPS
- Create pizzas using a drag and drop technique and a pizza shaped canvas
- Receive notifications when friends login or create a new pizza
- View all pizzas using a gallery feature

### Technologies
This is how I will use each of the required technologies:

- HTML. I will have 3 HTML pages, one for login, one for creating a pizza, and one which displays a gallery (Galleria) of all the pizzas
- CSS. Text formatting for titles of pages, organizing the images of the different pizzas and ensuring the page looks clean
- Javascript.  Drag-and-drop mechanics, login, and displaying pizzas when they are created in the galleria
- Service.  Backend service for storing and retrieving pizza images, logins, etc.
- Database/Login.  Stores users and their pizzas in a database, as well as login information securely stored in a database.  Registers and logins users
- WebSocket.  Notifies users when other users login or create a new pizza
- React.  Will be ported to use the React web framework

### Sketches

This is a sketch of the sequence diagram describing how the clients will interact with the server and vice versa

![seq-diagram](https://github.com/BlueBomber49/startup/assets/122587787/0bdc4c5c-b778-4b4e-8b63-2df9fbe927b5)

And these are rough sketches of how the website should look

![Sketches](https://github.com/BlueBomber49/startup/assets/122587787/fdccffe4-101d-4ec6-bf7b-bb4f34e12aab)

### HTML deliverable
- HTML pages - 3 HTML pages, one for login, one to create pizzas, and one to view them
- Links - Links at the top of each page for navigation between the different pages
- Text -  Text with instructions on how to create a pizza
- Images -  Image displaying delicious pizza on home page
- DB/Login -  Placeholder for login service in place
- WebSocket -  Placeholder for viewing other pizzas/notifications when a pizza is made
- 3rd party server calls - Fact of the day displayed at the bottom of the page

### CSS deliverable
- Header, footer, and main content body styled
- Navigation elements - I used some bootstrap buttons!
- Responsive to window resizing - My app looks good on standard window sizes, but struggles with extremes
- Application elements - Used good contrast and whitespace, things aren't too crowded
- Application text content - Consistent fonts
- Application images - Using placeholder images for finished pizzas

### JS deliverable
Wooo, we're in business now!
- Login:  My app autopopulates the pizza description text box with the user's name
- Database:  My app tracks the pizzas you make in an array and displays them in a beautiful grid!
- Websocket:  It flashes notifications at intervals representing when a user makes a pizza!
- Logic:  IT WORKS!!!  It's intuitive and allows you to create pizzas with ease

### Services deliverable
- I have created a server using node.js and express!
- Frontend is served up using the express static middleware
- I use a fact of the day 3rd party service endpoint on each of my pages
- My backend includes functions that will save the pizzas on the server
- My frontend calls those functions to save the pizzas

### Database/Login
- New register button on the front page
- Login button works for existing users
- MongoDB has the data!
- MongoDB has the credentials!

### Websocket
- My backend listens for websocket connections
- My frontend makes websocket connections
- Data is sent
- Data is displayed
- Let's go
- Ya can't makea the pizza unless youa sign-ina
