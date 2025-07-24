const wrapper = document.querySelector('.wrapper');
const joke = document.querySelector('.joke-content')

const setup = joke.querySelector('.setup')
const punchLine = joke.querySelector('.punch-line')

const tellJoke = document.querySelector('.tell-joke')

const generateJoke = async () => {
    setup.textContent = 'Loading...';
    punchLine.textContent = '';

    try {
        const getJokeAPI = await fetch('https://official-joke-api.appspot.com/random_joke')
        const theJoke = await getJokeAPI.json()
    
        setup.innerHTML = `${theJoke.setup}`
        punchLine.innerHTML = `${theJoke.punchline} 🤣🤣`
    } catch (err) {
        joke.innerHTML += `${err} couldn't fetch joke`
    }
}
tellJoke.addEventListener('click', generateJoke)