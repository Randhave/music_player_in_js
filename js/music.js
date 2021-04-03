console.log("Hello freinds");

const prev = document.getElementById('prev');
const next = document.getElementById('next');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var songImg = document.getElementById('songImg');
const image = document.querySelector('img')
let song = document.querySelector('audio');
let isPlaying = false;


const play = document.getElementById('play');
const playMusic = () => {

    isPlaying = true;
    song.play();
    play.classList.replace("fa-play", "fa-pause");
    image.classList.add("anime");
};

const pauseMusic = () => {
    
    let song = document.querySelector('audio');
    isPlaying = false
    song.pause();
    play.classList.replace("fa-pause", "fa-play");    // it replace play pause 
    image.classList.remove("anime");
}; 
let songsName = [
    {
        name: "song1",
        title: 'Feel music',
        artist: "Honey sing song",
        image: "img_1"
    },
    {
        name: "song2",
        title: "Feel music",
        artist: "Bashaha song ",
        image: "img_2"
    },
    {
        name: "song3",
        title: "Feel music",
        artist: "Badshah song",
        image: "img_3"
    },
    {
        name: "song4",
        title: "Feel music",
        artist: "Divine song",
        image: "img_1"
    },
    {
        name: "song5",
        title: "Feel music",
        artist: "MC stan song",
        image: "img_5"
    },
    {
        name: "song6",
        title: "Feel music",
        artist: "Divine song",
        image: "img_1"
    },
    {
        name: "song7",
        title: "Feel music",
        artist: "Unknown",
        image: "img_2"
    },
     {
        name: "song8",
        title: "Feel music",
        artist: "MC stan song",
        image: "img_5"
    },
    {
        name: "song9",
        title: "Feel music",
        artist: "Divine song",
        image: "img_1"
    },
    {
        name: "song10",
        title: "Feel music",
        artist: "Unknown",
        image: "img_3"
    },
];
// console.log(songsName);
// console.log(songsName.name, songsName.title, songsName.artist);

// Changing the music data 
let loadSong = (songsName) => {
    title.textContent = songsName.title;
    artist.textContent = songsName.artist;
    song.src = `songs/${songsName.name}.mp3`;
    image.src = `images/${songsName.image}.jpg`;

};

let songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songsName.length;  //formula must be correct , if wrong so many diffrent name error occurs
    loadSong(songsName[songIndex]);
    playMusic();
};

const prevSong = () => {
    loadSong(songsName[songIndex]);
    songIndex = (songIndex - 1 + songsName.length) % songsName.length;
    playMusic();

};

prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);

play.addEventListener('click', () => {
    // if (isPlaying == false) {
    //     playMusic();
    // }
    // else {
    //     pauseMusic();
    // }
    isPlaying ? pauseMusic() : playMusic(); // we are use ternary operator instead of if-else 
});



