"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listener for select on HTML
    document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
    detectUserPreference();
    readUserColorMode();
}

// detecter og set før valgte farve fra localstorage
function detectUserPreference() {
    const modeFromLocalStorage = readUserColorMode();
    console.log(modeFromLocalStorage);
    changeMode(modeFromLocalStorage);
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
}

// læser og returner usercolormode fra localstorage
function readUserColorMode() {
    localStorage.getItem("userColorMode");
    const userColorMode = localStorage.getItem("userColorMode");
    console.log(userColorMode);
    return userColorMode;
}

// gem farve fra color mode til localstorage
function saveUserColorMode(mode) {
    localStorage.setItem("userColorMode", mode);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
    console.log("New color mode selected");
    // laver en constant med valuen fra htmlen som er en farve vi har kaldt ved navn
    const selectedColorMode = this.value;
    
    changeMode(selectedColorMode);
    saveUserColorMode(selectedColorMode);
}
// laver en funktion der skifter farverne med et if statement
function changeMode(mode){
    resetColorMode(); // kalder funktion der resseter colormode til ingen ting.
    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        console.log("this is dark mode");

    } else if (mode === "yellow") {
        document.body.classList.add("yellow-mode");
        console.log("this is yellow");
    } else if (mode === "green") {
        document.body.classList.add("green-mode");
        console.log("this is green");
    }
}

function resetColorMode() {
    document.body.className = "";
}
