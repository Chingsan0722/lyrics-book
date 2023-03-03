// DEFAULT CODE ////////////////////////
const BASE_URL = "https://webdev.alphacamp.io/api/lyrics/";
const songList = document.querySelector("#song-list");
const lyricsPanel = document.querySelector("#lyrics-panel");
const album = {
  artist: "Adele",
  album: "25",
  tracks: [
    "Hello",
    "Send My Love (To Your New Lover)",
    "I Miss You",
    "When We Were Young",
    "Remedy",
    "Water Under the Bridge",
    "River Lea",
    "Love in the Dark",
    "Million Years Ago",
    "All I Ask",
    "Sweetest Devotion"
  ]
};

// WRITE YOUR CODE ////////////////////////
for (let i = 0; i < album.tracks.length; i++) {
  songList.innerHTML += `<li class="nav-item"><a class= "nav-link" href="#">${album.tracks[i]}</a></li>`;
}

songList.addEventListener("click", (e) => {
  const target = e.target;
  const active = document.querySelector(".active")
  if (active !== null) {
    active.classList.remove('active')
  }
  target.classList.add('active')
  axios
    .get(`https://webdev.alphacamp.io/api/lyrics/Adele/${target.textContent}.json`
    )
    .then((response) => {
      let lyrics = response.data.lyrics;
      lyricsPanel.textContent = lyrics;
    })
    .catch((error) => console.log("error"));
});
