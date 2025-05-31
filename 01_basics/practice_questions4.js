/*
JavaScript Real-World Practice Set 3
----------------------------------

!Instructions:
1. These questions simulate real-world tasks
2. Use only what you've learned in basics:
   - Variables and types
   - String methods
   - Number methods
   - Math operations
   - Basic type conversions
   - Date operations

?Level 1: Event Planning App
--------------------------*/

//* Q1: Ticket ID Generator
// Create a ticket ID using:
// - First 3 letters of event name
// - Current year
// - Random 3-digit number
let eventName = "Concert in the Park";
// Expected output like: "CON2023123"
// Your code here:

eventName = (eventName.substring(0, 4)).toUpperCase()
let currentTime = new Date()
let currentYear = currentTime.getFullYear()

let randomNumber = Math.floor((Math.random() * 900) + 100)

console.log(`Ticket ID: ${eventName}${currentYear}${randomNumber}`)


//* Q2: Event Capacity
// Given total seats and booked seats as strings
// Calculate and format:
// - Available seats
// - Percentage booked (with % symbol, no decimals)
let totalSeats = "200";
let bookedSeats = "75";
// Your code here:

totalSeats = Number(totalSeats)
bookedSeats = Number(bookedSeats)

let availableSeats = totalSeats - bookedSeats
let availSeatsPercent = (bookedSeats / totalSeats) * 100

console.log(`Available seats: ${availableSeats}, ${availSeatsPercent.toFixed(0)}% is full`)

/*
?Level 2: Weather App
-------------------*/

//* Q3: Temperature Display
// Convert temperature strings between units
// Show both in a formatted string
let tempC = "24";
// Convert to:
// - Fahrenheit (°F)
// - Kelvin (K)
// Format: "24°C = 75.2°F = 297.15K"
// Your code here:

let celsius = Number(tempC)
let fahrenheit = (celsius * (9 / 5)) + 32
let kelvin = ((fahrenheit - 32) * (5 / 9)) + 273.15

console.log(`${celsius}°C = ${fahrenheit}°F = ${kelvin.toFixed(2)}K`)


//* Q4: Rain Prediction
// Convert rainfall from inches to millimeters
// 1 inch = 25.4mm
let rainfall = "0.47";  // inches
// Round to 1 decimal place in mm
// Your code here:

rainfallInInch = Number(rainfall)
let rainfallInMM = rainfallInInch * 25.4

console.log(`Rainfall: ${rainfallInMM.toFixed(1)}mm`)

/*
?Level 3: Music Player
--------------------*/

//* Q5: Song Duration
// Given length in seconds, format as "minutes:seconds"
// Example: 185 seconds = "3:05"
let songLength = "185";
// Your code here:

songLength = Number(songLength)
let minutes = songLength / 60

let seconds = songLength % 60

console.log (`${songLength} = ${Math.floor(minutes)}:0${seconds}`)



//* Q6: Playlist Duration
// Calculate total duration of playlist
// Format the total in minutes
let song1 = "195";  // seconds
let song2 = "207";  // seconds
let song3 = "171";  // seconds
// Your code here:
song1 = Number(song1)
song2 = Number(song2)
song3 = Number(song3)

let totalDuration = song1 + song2 + song3
let totalMinutes = totalDuration / 60
let totalSeconds = totalDuration % 60

console.log (`${totalDuration} = ${Math.floor(totalMinutes)}:${totalSeconds}`)

/*
?Level 4: E-book Reader
---------------------*/

//* Q7: Reading Progress
// Calculate reading progress:
// - Current page
// - Total pages
// - Percentage complete (with % symbol, 1 decimal place)
let currentPage = "67";
let totalPages = "264";
// Your code here:

currentPage = Number(currentPage)
totalPages = Number(totalPages)

let completition = (currentPage / totalPages) * 100
console.log(`Completion: ${completition.toFixed(1)}`)


//* Q8: Reading Time
// Given average reading speed of 250 words per minute
// Calculate estimated time to read a chapter
let wordsInChapter = "4750";
// Convert to minutes and format as "X hours Y minutes"
// Your code here:

wordsInChapter = Number(wordsInChapter)
let wordsPerMinute = 250
let minuteTaken = wordsInChapter / wordsPerMinute

let hrsTaken = Math.floor(minuteTaken / 60)
console.log(`${hrsTaken} hours ${minuteTaken} minutes`)



/*
Test your solutions:
------------------*/
// Add console.log() statements to test each answer
