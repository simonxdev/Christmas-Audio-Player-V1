const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const songs = document.getElementById("songs")
const activesong = songs.value
const music = new Audio("bells.mp3")
const music2 = new Audio("christmas-atmosphere-11418.mp3")
const music3 = new Audio("happy-christmas-11300.mp3")
const boximg1 = document.getElementById("boximg1")
const boximg2 = document.getElementById("boximg2")


playBtn.addEventListener("click", function(){
    if (songs.value == "song1"){
        music2.pause()
        music3.pause()
        music.play()
        boximg1.classList.add("animatebox")
        boximg2.classList.add("animatebox")
    } else if (songs.value == "song2"){
        music.pause()
        music3.pause()
        music2.play()
        boximg1.classList.add("animatebox")
        boximg2.classList.add("animatebox")
    } else if (songs.value == "song3"){
        music.pause()
        music2.pause()
        music3.play()
        boximg1.classList.add("animatebox")
        boximg2.classList.add("animatebox")
    }
})
pauseBtn.addEventListener("click", function(){
    if (songs.value == "song1"){
        music.pause()
        boximg1.classList.remove("animatebox")
        boximg2.classList.remove("animatebox")
    } else if (songs.value == "song2"){
        music2.pause()
        boximg1.classList.remove("animatebox")
        boximg2.classList.remove("animatebox")
    } else if (songs.value == "song3"){
       music3.pause()
       boximg1.classList.remove("animatebox")
       boximg2.classList.remove("animatebox")
    }
})
stopBtn.addEventListener("click", function(){
    if (songs.value == "song1"){
        music.pause()
        music.currentTime = 0
        boximg1.classList.remove("animatebox")
        boximg2.classList.remove("animatebox")
    } else if (songs.value == "song2"){
        music2.pause()
        music2.currentTime = 0
        boximg1.classList.remove("animatebox")
        boximg2.classList.remove("animatebox")
    } else if (songs.value == "song3"){
       music3.pause()
       music3.currentTime = 0
       boximg1.classList.remove("animatebox")
       boximg2.classList.remove("animatebox")
    }
})

// Volume Control

let volume = document.querySelector("#volume-control");

volume.addEventListener("change", function(e) {
    if (songs.value == "song1"){
        music.volume = e.currentTarget.value / 100;
    } else if (songs.value == "song2"){ 
        music2.volume = e.currentTarget.value / 100;
    } else if (songs.value == "song3"){
        music3.volume = e.currentTarget.value / 100;
    }
})

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).



// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
