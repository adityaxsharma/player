const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist-name');
const artworkImg = document.querySelector('.player-artwork img');

const songs = [
    {
        title: 'Phir Aur Kya Chahiye',
        artist: '	Arijit Singh',
        artwork: 'images/cover1.jpg',
        audio: 'songs/song1.mp3'
    },
    {
        title: 'Tu itni Khoobsurat hai',
        artist: 'Jubin Nautiyal, Prakriti Kakkar',
        artwork: 'images/cover2.jpg',
        audio: 'songs/song2.mp3'
    },
    {
        title: 'Main Agar Kahoon',
        artist: 'Shreya Ghoshal and Sonu Nigam',
        artwork: 'images/cover3.jpg',
        audio: 'songs/song3.mp3'
    }
];

let currentSongIndex = 0;
let audioPlayer = new Audio(songs[currentSongIndex].audio);

function playSong() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong();
    playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong();
    playSong();
}

function loadSong() {
    audioPlayer.src = songs[currentSongIndex].audio;
    songTitle.textContent = songs[currentSongIndex].title;
    artistName.textContent = songs[currentSongIndex].artist;
    artworkImg.src = songs[currentSongIndex].artwork;

    if (audioPlayer.paused) {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

playBtn.addEventListener('click', function () {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong,);

audioPlayer.addEventListener('ended', nextSong);

loadSong();
