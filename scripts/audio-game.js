
export function playAudio() {
  const audio = document.getElementById("autoplay-audio");
  audio.play().catch((error) => {
    console.error("Autoplay failed:", error);
  });
}

document.getElementById("mute-button").addEventListener("click", () => {
  const audio = document.getElementById("autoplay-audio");

  if (audio.muted == true) {
    audio.muted = false;
    document.getElementById("play-icon").style.display = "block";
    document.getElementById("mute-icon").style.display = "none";

    playAudio();
  } else {
    audio.muted = true;
    document.getElementById("mute-icon").style.display = "block";
    document.getElementById("play-icon").style.display = "none";
  }
});
