function displayMessage(event) {
    event.preventDefault();
    let hiButton = document.querySelector("#hi-button");
    hiButton.classList.add("hidden");

    new Typewriter('#string-1', {
        strings:
        [ `Hello! I'm Elliot, your personal recepy generator...`,
          `I'm here to help you satisfy your desires in the kitchen 🌯🥞🥗🍣🥙`,
          `Tell me what you want and how many people are eating!`,
          `I'll tell you how to do it - the same way a cheff does it.` ],
        autoStart: true,
        delay: 45,
        pauseFor: 1000,
        cursor: "",
        loop: true,
      });
}


let hiButton = document.querySelector("#hi-button");
hiButton.addEventListener("click", displayMessage);