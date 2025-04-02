function displayRecepy(recepy) {
  let recepyWrapper = document.querySelector("#recepy");
  recepyWrapper.classList.add("recepy-wrapper");

  new Typewriter('#recepy', {
    strings: recepy.data.answer,
    autoStart: true,
    delay: 10,
    pauseFor: 700,
    cursor: "",
  });
}

function createRecepy(data) {
  data.preventDefault();

  let recepy = document.querySelector("#recepy");
  let query = document.querySelector("#user-instructions").value;
  let apiKey = 'do8ae0f5a33a8b61b41f1t1ed44678b4';
  let prompt = `User instructions = ${query}. Give me a complete recepy for this dish, with the ingredients (with quantities) and the step by step for preparation until conclusion. The ingredients (with quantities) must be presented inside a <li></li> element. Te recepy must be divided with divs <div></div> according to each phase of preparation. All the titles of the phases should be written inside a <h3></h3> element.`;
  let context = 'You are a professional brazillian cheff. Your job is to provide whole recepies according to the user instructions. DO NOT write a tittle to the recepy. You MUST consider the number of people eating before giving the recepy. Be polite and objective in your instructions';
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`

  recepy.innerHTML = `<div class="generating"> ⏳ Generating a recepy of ${query}...</div>`;
  axios.get(apiUrl).then(displayRecepy);
}

function displayForm() {
  let form = document.querySelector("#form-wrapper");
  let cookButton = document.querySelector("#submit-button")
  form.classList.remove("hidden");

  cookButton.addEventListener("click", createRecepy);
}

function displayMessage(event) {
    event.preventDefault();
    let hiButton = document.querySelector("#hi-button");
    hiButton.classList.add("hidden");

    new Typewriter('#string', {
        strings:
        [ `HELLO! I'M ELLIOT, YOUR PERSONAL RECEPY GENERATOR`,
          `I'M HERE TO HELP YOU SATISFY YOUR DESIRES IN THE KITCHEN...`,
          `TELL ME WHAT YOU WANT, AND HOW MANY PEOPLE ARE EATING WITH YOU`],
        autoStart: true,
        delay: 40,
        pauseFor: 1000,
        cursor: "",
        loop: true,
      });

      displayForm();
}


let hiButton = document.querySelector("#hi-button");
hiButton.addEventListener("click", displayMessage);