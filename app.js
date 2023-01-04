// const axios = require('axios').default;
// axios.<method> will now provide autocomplete and parameter typings

//Requesting for a random Joke from API and returning the recieved Joke data
const getTheJoke = async () => {
  const response = await axios.get("https://official-joke-api.appspot.com/jokes/random");
  return response.data;
}

//Listening for specific button click event
window.addEventListener("click", (evt) => {
  if (evt.target.id === "GetJoke") {
    addJoke();
  }
})

//Adding Joke to the page on button click event
const addJoke = async () => {
  const Joke = await getTheJoke();
  const bodycontainer = document.querySelector(".body-container");

  //Clearing previous Joke on page (if any) before adding the new one
  bodycontainer.innerHTML = "";

  const setup = document.createElement("p");
  setup.append(`${Joke.setup}`);
  const punchline = document.createElement("p");
  punchline.append(`- ${Joke.punchline}`);

  bodycontainer.append(setup);
  bodycontainer.append(punchline);
}