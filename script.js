const btn = document.getElementById("big");
const btnTwo = document.getElementById("normal");
const btnThree = document.getElementById("small");

const btnRed = document.getElementById("redBtn");
const btnGreen = document.getElementById("greenBtn");
const btnBlue = document.getElementById("blueBtn");

btn.addEventListener("click", speakHeader);
btnTwo.addEventListener("click", speakParagraph);
btnThree.addEventListener("click", speakSmall);

btnRed.addEventListener("click", speakRed);
btnGreen.addEventListener("click", speakGreen);
btnBlue.addEventListener("click", speakBlue);

// speechSynthesis.onvoiceschanged = () => {
//   console.log(speechSynthesis.getVoices());
// };

function speakHeader() {
  let header = document.getElementsByTagName("h1")[0].textContent;
  let speech = new SpeechSynthesisUtterance();
  const voices = speechSynthesis.getVoices();

  speech.voice = voices[184];
  speech.text = header;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function speakParagraph()
{
  let paragraph = document.getElementsByTagName("p")[0].textContent;
  let speech = new SpeechSynthesisUtterance();

  speech.text = paragraph;
  speech.volume = 0.9;
  speech.rate = 1.2;
  speech.pitch = 1.2;

  window.speechSynthesis.speak(speech);
}

function speakSmall()
{
  let mark = document.getElementsByTagName("mark")[0].textContent;
  let speech = new SpeechSynthesisUtterance();

  speech.text = mark;
  speech.volume = 0.5;
  speech.rate = 1;
  speech.pitch = 1.5;

  window.speechSynthesis.speak(speech);
}

function speakRed() {
  let div = document.getElementsByTagName("div")[0].textContent;
  let speech = new SpeechSynthesisUtterance();
  const voices = speechSynthesis.getVoices();

  speech.voice = voices[1];
  speech.text = div;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function speakBlue() {
  let div = document.getElementsByTagName("div")[1].textContent;
  let speech = new SpeechSynthesisUtterance();
  const voices = speechSynthesis.getVoices();

  speech.voice = voices[20];
  speech.text = div;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function speakGreen() {
  let div = document.getElementsByTagName("div")[2].textContent;
  let speech = new SpeechSynthesisUtterance();
  const voices = speechSynthesis.getVoices();

  speech.voice = voices[206];
  speech.text = div;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
