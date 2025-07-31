
const synth = new Tone.Synth().toDestination();

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

Object.keys(noteMap).forEach(className => {
  const button = document.querySelector(`.${className}`);
  if (button) {
    button.addEventListener("click", () => {
      Tone.start().then(() => {
        synth.triggerAttackRelease(noteMap[className], "8n");
      });
    });
  }
});
