# HTML5Game
`This requires more testing as it's in BETA`  
A set of classes to assist your web game development journey

## How do I use this?
### Importing
You need to include the base modules in your project, so grab the [HTML5Game.js](https://github.com/itsoutchy-projects/HTML5Game/blob/main/HTML5Game.js) and [GameObject.js](https://github.com/itsoutchy-projects/HTML5Game/blob/main/GameObject.js) scripts from this repo.

Then import it like this (your script must be a module to do this)
```js
import HTML5Game from "path/HTML5Game.js";
```

To make objects, you need to import GameObject.js which you should have in your project.
```js
import GameObject from "path/GameObject.js";
```

For key checking you need to get the [Input.js](https://github.com/itsoutchy-projects/HTML5Game/blob/main/Input.js) script

Then import it like this.
```js
import Input from "path/Input.js";
```
Do note that you can only use the Input module after calling `Start();` on your HTML5Game instance or in the Update callback of the constructor.
### Getting started
Now that you have all the files, lets begin!

Start by adding a canvas to your HTML file like this:
```HTML
<canvas id="gameCanvas"></canvas>
```

To initialize your game, initialize a HTML5Game instance like so:
```js
let canvas = document.getElementById("gameCanvas"); // This is where your objects will be drawn
let game = new HTML5Game(canvas, function() {
  // This will be called on every frame, I'll refer to this as the update callback
});
```
Now we can add objects to your game!
To do this, make a GameObject like so:
```js
let object = new GameObject("black", 0, 0, 50, 50, false); // This GameObject will not follow the camera unless you change the last parameter to "true" or counter the camera offsets
```
Then we need to add it to the list of objects to be drawn:
```js
game.draw(object);
```
Perfect! Now we just need to start the game like this:
```js
game.Start();
```
Now open your HTML file, you should see this:  
![image](https://github.com/itsoutchy-projects/HTML5Game/assets/95544056/5311fa0f-669c-4a48-85d2-05ac6614d53c)  
Perfect! Now you've made a start to your web game!
Before you go, here's a few things you should know:
- You must only check for inputs inside of the update callback  
- To check for key presses, do this (following the rule above):
```js
if (Input.PressedKeys.includes("thekey")) {
    // ...
}
```
Now have a go at figuring some stuff out on your own, if there's a bug, please create an [issue](https://github.com/itsoutchy-projects/HTML5Game/issues)
