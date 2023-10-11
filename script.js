console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem')); // Correct variable name
let song = [
    { songName: "Warriyo - Mortals (feat. Laura Brehm) | NCS - Copyright Free Music  NoCopyrightSounds ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible | NCS - Copyright Free Music", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart | NCS - Copyright Free Music", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji - Heroes Tonight (feat. Johnning) | NCS - Copyright Free Music", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "salam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    // Add more songs here
];

// Update the song item images and names
songItems.forEach((element, i) => {
    // Get the relevant song object from the 'song' array
    const currentSong = song[i];

    // Find the image and span elements within the song item
    const imgElement = element.querySelector('img');
    const songNameElement = element.querySelector('.songName');

    // Update the image source and song name
    imgElement.src = currentSong.coverPath;
    songNameElement.textContent = currentSong.songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen for audio time update
audioElement.addEventListener('timeupdate', () => {
    // Update seek bar
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Seek to a specific position when the user changes the progress bar
myProgressBar.addEventListener('input', () => {
    const seekTime = (myProgressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});
