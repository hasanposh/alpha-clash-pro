function hideElement(elemntId) {
    const homeScreen = document.getElementById(elemntId)
    homeScreen.classList.add('hidden')
}

function showElement(elemntId) {
    const playScreen = document.getElementById(elemntId)
    playScreen.classList.remove('hidden')
}

function setBackgroundColorById(elemntId) {
    const elemnt = document.getElementById(elemntId);
    elemnt.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elemntId) {
    const elemnt = document.getElementById(elemntId);
    elemnt.classList.remove('bg-orange-400')
}


function getTextElementValueById(elemntId){
    const elemnt = document.getElementById(elemntId)
    const elemnntValueText = elemnt.innerText;
    const value = parseInt(elemnntValueText);
    return value;
}
function setTextElementValueById(elemntId, value){
    const elemnt = document.getElementById(elemntId)
    elemnt.innerText = value
    
}

function getElementTextByid(elemntId){
    const elemnt = document.getElementById(elemntId) 
    const text = elemnt.innerText
    return text
}



function getRandomAlphabet() {
    // create a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets)

    // get a random index of 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    // console.log(index , alphabet)
    return alphabet
}