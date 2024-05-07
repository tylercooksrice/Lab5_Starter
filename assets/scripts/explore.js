// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //To test output. Debugging only
  //const testArea = document.createElement("p");
  //testArea.textContent="Output: ";

  const body = document.querySelector("#explore");
  const button = document.querySelector("button");
  const imgElement = document.querySelector('img[alt="Smiling face"]');
  const voiceSelector = document.querySelector("#voice-select");
  const speaker = window.speechSynthesis;
  let selectedVoice = 0;
  let voiceList = "";

  speaker.addEventListener('voiceschanged', () => {
    //testArea.textContent = testArea.textContent.concat("LISTENED");
    voiceList = speaker.getVoices();
    for(let i = 0; i < voiceList.length; i++) {
      const tempVoice = document.createElement("option");
      tempVoice.textContent=voiceList[i].name;
      tempVoice.value=voiceList[i].name;
      tempVoice.setAttribute("data-lang", voiceList[i].lang);
      tempVoice.setAttribute("data-name", voiceList[i].name);
      voiceSelector.appendChild(tempVoice);
      //testArea.textContent = testArea.textContent.concat("A");
    }
  });
  
  button.addEventListener("click", (event) => {
    selectedVoice=voiceSelector.selectedIndex - 1;
    if(selectedVoice >= 0) {
      const input = document.querySelector("textarea");
      let utterance = new SpeechSynthesisUtterance(input.value);
      utterance.voice=voiceList[selectedVoice];
      speaker.speak(utterance);
      imgElement.src ="assets/images/smiling-open.png";
      utterance.onend = function() {
        imgElement.src ="assets/images/smiling.png";
      };  
    }
    //testArea.textContent = testArea.textContent.concat(selectedVoice);
  }); 
  
  //body.appendChild(testArea);
}