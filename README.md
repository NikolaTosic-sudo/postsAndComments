# React project bootstrapped with create-react-app

## Available Scripts

In the project directory, you can run:

### `npm install`

Run this to install `node_modules`, after that you can run the rest of commands.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


## Build process:

* First I thought what this project should look like, how can I sort components and containers the best way and most practical.
* Started from the bottom, created two simple components to render single post and single comment, gave them some dummy text for now.
* Then created a container which would render multiple posts, something like a postList, that created some problems later.
* Biggest problem was that I couldn't implement comments for every post in that list, it was possible for sure, but too much code, tried to find an easier way to do it.
* After exploring API I had for this project, I saw that every user has their own posts and every post has their own comments, that made my job a bit easier.
* I figured I'd have a container to render one user with all their posts and one post with all their comments.
* After creating it fetching data was easy, I used axios in this project because I'm kinda used to them and stored most in the state
* Then in the App container I rednered all the users (In the meantime created a SearchBox component, which would search for users using the input field and filter the posts based on the user data), and created 2 Routes for all the posts and one single post.
* I used callback function to send prop from children to parent, it's a great technique which goes around the rule in React that you can only send data from parent to children.
* The prop I was sending was a postID so I can render a single post that was clicked on. Again used the container with all posts and comments for it, even created a simple button which clears the state of postID and after that, with componentDidUpdate it reloads the page so it renders all the posts.
* Created two Higher Order Components. Auxiliary, which wraps up other components into a singular, and withClass, which also wraps other but on this one you can add a class to it from CSS.
* Used some components that I had from before, simple UI components, Modal and Loader, when data is loading or site threw an error.
* Created a separated JavaScript file to hold all functions used in the project, using only one for consol.logging every component, but more functions can be added later.
* When it came to writing unit testing, I had very very little experience with it, but I tried to learn it as quickly as possible, and I wrote tests for every container.
* They are similar, but are doing jobs they should do.
* At the end it was time to style it a bit, didn't go over the top with styles, something minimum for user to know what is what and not get confused completely.
* Before finishing, checked the code muliple times and removed all unnecessary lines from it.


### Approximate time needed to finish the assignment: 20 hours
