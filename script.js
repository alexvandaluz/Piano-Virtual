const synth = new Tone.Synth().toDestination();

let started = false;

document.addEventListener('click', () => {
  if (!started) {
    Tone.start();
    started = true;
  }
});

const noteMap = {
  keyc: "C4",
  keyd: "D4",
  keye: "E4",
  keyf: "F4",
  keyg: "G4",
  keya: "A4",
  keyb: "B4",
  keyC: "C#4",
  keyD: "D#4",
  keyF: "F#4",
  keyG: "G#4",
  keyA: "A#4"
};

document.body.addEventListener('click', (event) => {
  const keyClick = event.target.dataset.key;
  if (keyClick) {
    playSound(keyClick);
  }
});

function playSound(keyClass) {
  const note = noteMap[keyClass];
  const keyElement = document.querySelector(`.${keyClass}`);

  if (note) {
    synth.triggerAttackRelease(note, "8n");
  }

  if (keyElement) {
    keyElement.classList.add('active');
    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 300);
  }
}
