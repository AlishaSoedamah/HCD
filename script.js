function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function playtwo() {
    var audiotwo = document.getElementById("audiotwo");
    audiotwo.play();
}

const input = document.getElementById('searchbar');
const dropdown = input.nextElementSibling;

input.addEventListener('focus', () => dropdown.style.opacity = '1');
document.addEventListener('click', (e) => {
  if (!input.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.opacity = '0';
  }
});