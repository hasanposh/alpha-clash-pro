function continueGame() {
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your Random Alphabet is :', alphabet)

    // set randomly generated alphabet to the dcreen (display  it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet);
}

function playNow() {
    hideElement('home-screen')
    showElement('play-ground')
    continueGame()
}