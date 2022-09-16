# Intro To Express

## Part 1: Installing Express On Your Node Project

- Use `npm init` to initialize this repo folder as a Node project.
- Go to http://expressjs.com/en/starter/installing.html and follow the instructions to install Express in your Node project.
- Create an `index.js` file and a start script in your `package.json` that uses Node to run `index.js`.

## Part 2: Setting up a 'Hello World' server

Our aim for this project is to follow the 'Hello World' steps on the Express documentation: http://expressjs.com/en/starter/hello-world.html. Following the example to create a functioning server that returns the text 'Hello World!' when you navigate to the localhost port on the browser. Run your server with Node, and send a request with your browser to check if it's working.

## Part 3: Understanding the code

Did you manage to implement the code from the Express documentation? Congratulations, you've succesfully followed the docs! However, it will be useful for you to make sure you understand what each of its component parts is doing. Comment each line of code in the server with an explanation of what each part is doing.

## Part 4: Internalising the code

Delete all of your code, but not your comments. Try and write out your 'Hello World' server again from memory.

## Part 5: Customising the server

In the future, you'll probably want your servers to do more than send back some text to display on a webpage. Think about all the APIs we've used so far on the bootcamp, and dream for a moment about what kind of sweet API you could build yourself. Then, quickly ground those dreams in cold hard reality. Kidding! They can literally do anything you want them to.

Customise your Express server:

- Instead of sending the string with text "Hello World", send a JSON object with `message: 'Hello World'`.
- Add multiple request handlers at different paths, sending different JSON responses.
