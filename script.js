let header = document.getElementsByTagName("h1")[0].innerHTML;
let speech = new SpeechSynthesisUtterance();

speech.text = header;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
window.speechSynthesis.speak(speech);