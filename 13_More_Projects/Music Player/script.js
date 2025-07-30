const song = document.querySelector("audio");
song.load() 
const playBtn = document.getElementById("play");
const songTitle = document.getElementById("title");
const songArtist = document.getElementById("artist");
const songCurrentTime = document.getElementById("current-time");
const songFinalTime = document.getElementById("duration-time");

const allControls = document.querySelector(".controls");
const buttonPlayPause = document.getElementById("play");
const buttonPrevious = document.getElementById("prev");
const buttonNext = document.getElementById("next");

const songVolume = document.querySelector(".volume-slider");
const songProgress = document.querySelector(".progress-bar");



function formatSongTimes(song) {
  //? This function formats the current time and duration of the song
  if (!song.duration) {
    return {
      songStartTime: { minutes: 0, seconds: 0 },
      songDuration: { minutes: 0, seconds: 0 },
    };
  }
  const current = Math.floor(song.currentTime);
  const duration = Math.floor(song.duration);

  return {
    songStartTime: {
      minutes: Math.floor(current / 60),
      seconds: current % 60,
    },
    songDuration: {
      minutes: Math.floor(duration / 60),
      seconds: duration % 60,
    },
  };
}

function formatTime(min, sec) {
  //? This function formats the time in MM:SS format
  return `${min}:${sec < 10 ? "0" + sec : sec}`
}





//? Main Event function
function mainEventHandler(e) {
  if (e.target === buttonPlayPause) {
    playAudio();
  }
}

function loadingData() {
  //? This function loads the song data and updates the UI
  const { songStartTime, songDuration } = formatSongTimes(song)
  songCurrentTime.textContent = formatTime(songStartTime.minutes, songStartTime.seconds);
  songFinalTime.textContent = formatTime(songDuration.minutes, songDuration.seconds);

  songProgress.min = Math.floor(song.currentTime);
  songProgress.max = Math.floor(song.duration);
}

function songTimeUpdate() {
  //? This function updates the song progress and current time
  song.addEventListener("timeupdate", () => {
    songProgress.value = Math.floor(song.currentTime);
    const { songStartTime } = formatSongTimes(song)
    songCurrentTime.textContent = formatTime(songStartTime.minutes, songStartTime.seconds);
  });
}


async function playAudio() {
  try {
    await song.play();
    songTimeUpdate();
  } catch {}
}



//! ------ AllEVENTS -------
song.addEventListener('loadedmetadata', loadingData)
allControls.addEventListener("click", mainEventHandler);
