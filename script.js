let textarea = document.querySelector("textarea");
let voices = document.querySelector("voices");
let button = document.querySelector("button");

window.speechSynthesis.addEventListener('voiceschanged', () => {
  let voicesList = window.speechSynthesis.getVoices();

  for (let i in voicesList) {
    let optionEl = document.createElement("option");
    optionEl.setAttribute('value', i);
    optionEl.innerText = voicesList[i].name;
    voices.appendChild(optionEl);
  }
});

button.addEventListener('click', () => {
  if (textarea.value !== '') {
    let voicesList = window.speechSynthesis.getVoices();
    let ut = new SpeechSynthesisUtterance(textarea.value);
    ut.voice = voicesList[selectedVoice]
    window.speechSynthesis.speak(ut);
  }
});

voices.addEventListener('change', () => {
  selectedVoice = parseInt(voices.value)
})

function updadeStatus() {
  if (window.speechSynthesis.speaking) {
    voices.setAttribute('disabled', 'disabled')
    button.setAttribute('disabled', 'disabled')
  } else {
    voices.removeAttribute('disabled')
    button.removeAttribute('disabled')
  }
}
setInterval(updadeStatus, 100)