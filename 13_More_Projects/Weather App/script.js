const API_KEY = "c4878d23acf16e492c2fc8dc93dfee54";

const inputCityName = document.getElementById('city-input')
const inputBtn = document.getElementById('city-input-btn')



async function getWeather(city) {
    try {
        const getAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const data = await getAPI.json()

        if (data.cod !== 200) {
            alert(`Error ${data.cod} ${data.message || 'Please enter a valid city name'}`)
            inputCityName.value = ''
            return
        }
        return data   

    } catch (error) {
        console.log(error)
        return
    }
}

function validateCityName(userInput, fromAPI) {
    this.userInput = userInput.toLowerCase().trim()
    this.fromAPI = fromAPI.toLowerCase().trim()

    if (this.userInput !== this.fromAPI) return false;
    return true;    
}

function allTempUnits(cityDetails) {
    const currentTemp = cityDetails.main.temp
    return {
        celsius: Number((currentTemp - 273.15)).toFixed(1),
        fahrenheit: Number(((currentTemp - 273.15) * 9/5 + 32)).toFixed(1),
    }
}

function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ')
}

function renderWeatherResult(cityName, temperature, weather, wIcon) {
    const displayCity = document.querySelector('.city-name-display')
    const weatherIcon = document.getElementById('weather-icon')
    const celsius = document.getElementById('celsius')
    const fahrenheit = document.getElementById('fahrenheit')
    const weatherCondition = document.querySelector('.weather-condition')

    displayCity.innerHTML = `${capitalizeWords(cityName)}`
    weatherIcon.src = `https://openweathermap.org/img/wn/${wIcon}@2x.png`
    celsius.innerHTML = `${temperature.celsius}°C`
    fahrenheit.innerHTML = `${temperature.fahrenheit}°F`
    weatherCondition.innerHTML = `${weather}`
}

function updateSearchHistory(cityName) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || []

    history = history.filter(city => city.toLowerCase() !== cityName.toLowerCase())
    history.unshift(cityName)

    history = history.slice(0, 4)

    renderSearchHistory(history)
    localStorage.setItem('searchHistory', JSON.stringify(history))
}

function renderSearchHistory(history) {
    const searchResult = document.querySelector('.search-history')
    searchResult.innerHTML = ''
    history = history ?? []
    // if(!history) {
    //     history =[]
    // }
    
    history.forEach(city => {
        const newLi = document.createElement('li')
        newLi.innerHTML = city
        searchResult.appendChild(newLi)
    });
}

document.querySelector('.clear-search-history').addEventListener('click', () => {
    localStorage.removeItem('searchHistory')
    renderSearchHistory(history)
})

document.querySelector('.search-history').addEventListener('click', (e) => { // search-history is an ul
    if(e.target.matches('li')) {
        const city = e.target.textContent
        inputCityName.value = city;  // Put city into the input box
        inputBtn.click(); 
        console.log(city)
    }
})

inputCityName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        inputBtn.click()
    }
})

//? Event Handler   
inputBtn.addEventListener('click', async () => {
    const CITY = inputCityName
    if(!CITY.value) {
        alert('Pease enter the name of the city!!')
        return
    }
    
    const newData = await getWeather(CITY.value)
    if (!newData) return

    if(!validateCityName(CITY.value, newData.name)) {
        alert('Please enter correct city name!!')
        CITY.value = ''
        return
    }

    const temperatures = allTempUnits(newData)
    const weather = newData.weather[0].main
    const iconID = newData.weather[0].icon

    updateSearchHistory(newData.name)
    renderWeatherResult(CITY.value, temperatures, weather, iconID)
    CITY.value = ''

})
