# Authenticated react/express app
An authenticated react/express app

##Run the following commands to start the project:
- `npm install`
- `webpack` to build the js
- `gulp sass` to build the css
- `python -m SimpleHTTPServer` to run the client side
- `nodemon` to run the server side

##To dos:
- Create a form & api call to the express server to sign in
- Authenticate the client side app to work with the express app
- Integrate the server and client side project to run on one server
- Toggle the logged in/ logged out state in the header component

##Future aims:
- Convert the server side code over to ES6 and compile into one single app.js file using babel
- Setup 'events' in the same way as users
- Update react router to use browserHistory with server side rendering and remove hashHistory