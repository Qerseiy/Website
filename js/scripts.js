let diffElem = document.querySelector("#dayDiff");

const diffDays = (date, otherDate) =>
  Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

diffElem.innerText = diffDays(new Date(), new Date("2023-08-06"));

let speakerElem = document.querySelector("#speaker");
let isSpeakerPlaying = false;
let music = new Audio("assets/Krank [Official Audio].mp3");
music.loop = true;

speakerElem.addEventListener("click", function () {
  if (!isSpeakerPlaying) {
    speakerElem.src = "assets/speaker-playing.svg";
    isSpeakerPlaying = true;
    music.play();
  } else {
    speakerElem.src = "assets/speaker-muted.svg";
    isSpeakerPlaying = false;
    music.pause();
    music.currentTime = 0;
  }
});
