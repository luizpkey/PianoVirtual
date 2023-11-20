const pianoKeys = document.querySelectorAll('.piano-keys .key');

const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');
const selectInstruments = document.querySelector('#instruments');

//var instrument = "piano";
var instrument = "piano";
var audio = new Audio(".src/tunes/a.wav");
var mapedKeys = []
const PlayTune = (key) => {
   audio.src = `./src/tunes/${instrument}/${key}.wav`;
   audio.play();
   const clickedKey = document.querySelector(`[data-key="${key}"]`);
   clickedKey.classList.add('active');
   setTimeout(() => clickedKey.classList.remove('active'), 150);
}

pianoKeys.forEach(key => {
   key.addEventListener('click', () => PlayTune(key.dataset.key))
   mapedKeys.push(key.dataset.key)
})

document.addEventListener('keydown', e => {
   const key = e.key;
   if (mapedKeys.includes(key)) {
      PlayTune(key);
   }
})

const handleVolume = (e) => {
   audio.volume = e.target.value
}

volumeSlider.addEventListener('input', handleVolume)

keysCheck.addEventListener("click", () => {
   pianoKeys.forEach(key => key.classList.toggle("hide"))
})

selectInstruments.addEventListener("change", () => {
   instrument = selectInstruments.value;
})