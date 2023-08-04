const numbersAndLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let button = document.getElementById('button');
let firstColorBox = document.getElementById('first-color-box');
let sencondColorBox = document.getElementById('second-color-box');
let thirdColorBox = document.getElementById('third-color-box');

let firstHexCode = document.getElementById('first-hex-code');
let secondHexCode = document.getElementById('second-hex-code');
let thirdHexCode = document.getElementById('third-hex-code');

// Always generate a random number inside its own function for clean & better control
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 16);
    return randomNumber;
}

button.addEventListener('click', () => {

    let hexCodeFirstBox = '#'
    let hexCodeSecondBox = '#'
    let hexCodeThirdBox = '#'

    for( let myFirstLoop=0; myFirstLoop<6; myFirstLoop++ ) {
        let randomHex = numbersAndLetters[generateRandomNumber()];

       hexCodeFirstBox += randomHex;
    }

    for( let mySecondLoop=0; mySecondLoop<6; mySecondLoop++ ) {
        let randomHex2 = numbersAndLetters[generateRandomNumber()];

       hexCodeSecondBox += randomHex2;

    }

    for( let myThirdLoop=0; myThirdLoop<6; myThirdLoop++ ) {
        let randomHex3 = numbersAndLetters[generateRandomNumber()];

       hexCodeThirdBox += randomHex3;

    }

    firstColorBox.style.backgroundColor = hexCodeFirstBox;
    firstHexCode.innerHTML = hexCodeFirstBox;
    sencondColorBox.style.backgroundColor = hexCodeSecondBox;
    secondHexCode.innerHTML = hexCodeSecondBox;
    thirdColorBox.style.backgroundColor = hexCodeThirdBox;
    thirdHexCode.innerHTML = hexCodeThirdBox;
    
})