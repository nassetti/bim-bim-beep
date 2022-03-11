# Simple Simon          
A simple Simon Game to help users practice their short-term memory skills. This Simon game has no pre-determined end point, which means users can keep playing until they fail.

## Purpose
This game was designed to be reminscent of the orignal Simon game that many people will have played with as children. Below is an image of a physical Simon game. Image from: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkchd.co.uk%2Fwp-content%2Fuploads%2F2020%2F02%2Fsimon-game-main-1.jpg&f=1&nofb=1

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkchd.co.uk%2Fwp-content%2Fuploads%2F2020%2F02%2Fsimon-game-main-1.jpg&f=1&nofb=1" alt="Image of physical Simon Game" height=400px width=400px>
     
## Features

* Initial Alert

    Though the game is quite simple, it may not be immediately self explanatory unless one is familiar with Simon games. For this reason, an initial alert was added to       explain the basic instructions to the user and inform them how to find the further instructions button.
    
    <img src=readme-assets/initial-alert.png alt="Image of initial alert">
    
    
* Tutorial Modal

    Button which changes the visibility of a tutorial modal that explains the rules of the game.

    <img src=readme-assets/instructions-modal.png alt="Image of instructions modal visible" width=80%>


* Mute Button

    A mute/unmute button was added to the top right corner of the game area so that users could toggle the sound generation of the game. Though sounds are useful in a       memory game as they interact with auditory memory, they are shrill and may cause some users discomfort. For this reason, the site has a simple button for users to       turn off this function.

    <img src=readme-assets/sound.png alt="Image of sound icon" width=50px height=50px>

    <img src=readme-assets/mute.png alt="Image of muted icon" width=50px height=50px>

* Level Counter

    Though the level counter is not necessary, as the user knows how many clicks they have to make through the text above the START/RESET buttons, they may find it           useful to see what stage 

    <img src=readme-assets/level-counter.png alt="Image of level counter">

* Interactive Arrow Area

    Game area consisting of interactive arrow buttons. Arrow buttons orignally designed for keyboard inputs, but changed to click inputs instead to allow for use on         mobile screens. 

    <img src=readme-assets/game-area.png alt="Image of level counter">
    
* Activated Buttons

    When buttons are activated they change colour and are highlighted by a box shadow. This creates a clear differentiation between the activated button and the original     button, making it apparent to the player which button is being activated. In the below image, all buttons are highlighted as part of testing, but this does not occur     during game play.
    
     <img src=readme-assets/activated-test.png alt="Image of all buttons activated">


## Testing
* HTML

    Tested in the HTML W3C validator with no issues highlighted. 

    <img src=readme-assets/html-w3c.png alt="Image illustrating no HTML issues">

* CSS

    Tested in the CSS Jigsaw validator with no issues highlighted.

    <img src=readme-assets/css-w3c.png alt="Image illustrating no CSS issues">


* JavaScript

    Tested in the JSHint validator. Some potential issues showing as the JS code has some code only available in ES6. 

* Github Pages

    Tested in GitPod live server as well as Github Pages. 

* Mobile Size

    Media query written for screen sizes under 700px in width. This means users can interact with the page under most screen conditions.

    <img src=readme-assets/mobile-test.png alt="Image illustrating mobile screen test">




## References
[Freshman: Build a Simon Game](https://freshman.tech/simon-game/)

[Simon Gave JS Tutorial](https://www.youtube.com/watch?v=n_ec3eowFLQ&t=161s)

[Font Awesome Icons](https://www.w3schools.com/icons/fontawesome_icons_intro.asp)

[Modal Tutorial](https://www.w3schools.com/howto/howto_css_modals.asp)

[Grow Effect](https://travis.media/how-to-make-an-item-grow-on-hover-with-css/)
