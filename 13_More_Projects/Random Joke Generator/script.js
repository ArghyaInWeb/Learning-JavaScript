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

const copyBtn = document.querySelector('.copy-joke');

copyBtn.addEventListener('click', async () => {
    const fullJoke = `${setup.textContent} - ${punchLine.textContent}`;
    if (!setup.textContent.trim()) {
        alert("No joke to copy! Click 'Tell Joke' first.");
        return;
    }
    try {
        await navigator.clipboard.writeText(fullJoke);
        alert('Joke copied to clipboard!');
    } catch (err) {
        console.error('Copy failed:', err);
        alert('Failed to copy joke.');
    }
});
