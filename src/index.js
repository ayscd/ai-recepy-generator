function displayRecepy(recepy) {
  console.log(recepy.data);
  console.log(recepy.data.answer);
}

function createRecepy(data) {
  data.preventDefault();

  let query = document.querySelector("#user-instructions").value;
  let apiKey = 'do8ae0f5a33a8b61b41f1t1ed44678b4';
  let prompt = `User instructions = ${query}`;
  let context = 'You are a professional brazillian cheff. Your job is to provide recepies according to the user instructions. DO NOT write a tittle to the recepy. You MUST consider the number of people eating before giving the recepy. The recepies presented must contain the ingredients (with quantities), the step by step for preparation, and the estimate time to prepare everything. The ingredients (with quantities) must be presented inside a <li></li> element. Te recepy must be divided with divs <div></div> according to each phase of preparation. All the titles of the phases should be written inside a <h3></h3> element. At the end of the recepy, sign with Bon appetit! inside a <strong></strong> element.';
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`

  console.log(apiUrl);
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