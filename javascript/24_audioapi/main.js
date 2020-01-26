const playSongObj = document.getElementById(`playSong`);
const stopSongObj = document.getElementById(`stopSong`);
const pauseSongObj = document.getElementById(`pauseSong`);

const song = new Audio(`song.mp3`);

playSongObj.onclick = function() {  
    song.play();
    playSongObj.innerText="Song abspielen";

}
stopSongObj.onclick = function() {
    song.pause();
    song.currentTime = 0;
    playSongObj.innerText="Song abspielen";
}
pauseSongObj.onclick = function() {
    song.pause();
    playSongObj.innerText= "Song weiterspielen";
}