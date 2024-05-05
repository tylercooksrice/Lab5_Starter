// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    
    const selectElement = document.querySelector("#horn-select");
    const exposeSection = document.querySelector("#expose");
    const imgElement = document.querySelector('img[alt="No image selected"]');
    const volumeControls = document.querySelector("#volume-controls");
    const audioElement1 = new Audio("assets/audio/air-horn.mp3");
    const audioElement2 = new Audio("assets/audio/car-horn.mp3");
    const audioElement3 = new Audio("assets/audio/party-horn.mp3");
    const button = document.querySelector("button");
    const jsConfetti = new JSConfetti();
    let globalVolume = 0.5;
    
    /* CHATGPT IS EPIC THIS IS AN SVG YEAH
    // Create a new div element
    const div = document.createElement("div");

    // Fetch the SVG file
    fetch('assets/images/air-horn.svg')
     .then(response => response.text())
      .then(svgText => {
        // Set the innerHTML of the div to the SVG content
        div.innerHTML = svgText;
    
    // Append the div to the document body or any other parent element
        document.body.appendChild(div);
      })
      .catch(error => console.error('Error fetching SVG:', error));
    */

    volumeControls.addEventListener("change", (event) => {
        const volumeIcon = volumeControls.getElementsByTagName("img")[0];
        globalVolume = event.target.value/100;
        
        if(event.target.value == 0) {
            volumeIcon.src="assets/icons/volume-level-0.svg";
        } else if(event.target.value < 33) {
            volumeIcon.src="assets/icons/volume-level-1.svg";
        } else if(event.target.value < 67) {
            volumeIcon.src="assets/icons/volume-level-2.svg";
        } else {
            volumeIcon.src="assets/icons/volume-level-3.svg";
        }
    })
    

    selectElement.addEventListener("change", (event) => {
      if (event.target.value == "air-horn") {
        const airHornImage = document.createElement("div");
        fetch('assets/images/air-horn.svg')
            .then(response => response.text())
            .then(svgText => {
                airHornImage.innerHTML = svgText;
            })
        exposeSection.replaceChild(airHornImage,exposeSection.children[1]);
        
      } else if (event.target.value == "car-horn") {
        const carHornImage = document.createElement("div");
        fetch('assets/images/car-horn.svg')
            .then(response => response.text())
            .then(svgText => {
                carHornImage.innerHTML = svgText;
            })
        exposeSection.replaceChild(carHornImage,exposeSection.children[1]);
        
      } else if (event.target.value == "party-horn") {
        const partyHornImage = document.createElement("div");
        fetch('assets/images/party-horn.svg')
            .then(response => response.text())
            .then(svgText => {
                partyHornImage.innerHTML = svgText;
            })
        exposeSection.replaceChild(partyHornImage,exposeSection.children[1]);
      }
    });

    alert("test");

    button.addEventListener("click", (event) => {
      if (selectElement.value == "air-horn") {
        audioElement1.volume = globalVolume;
        audioElement1.play();
      } else if (selectElement.value == "car-horn") {
        audioElement2.volume = globalVolume;
        audioElement2.play();
      } else if (selectElement.value == "party-horn") {
        audioElement3.volume = globalVolume;
        audioElement3.play();
        jsConfetti.addConfetti();
        

      }
    });

}