// apiKey = "2a57125389cfabdc4355c4a0bec4";
const URL = "https://hindi-jokes-api.onrender.com/jokes?api_key=2a57125389cfabdc4355c4a0bec4";

const joke = document.getElementById('joke');
const btn = document.getElementById('btn');

async function getJokes() {
    let response = await fetch(URL);
    let data = await response.json();
    joke.innerText = data.jokeContent;
}

btn.addEventListener('click', getJokes);