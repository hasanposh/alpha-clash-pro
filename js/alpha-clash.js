function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key;

    // sstop the game if presssed 'Esc'
    if(playerPressed==='Escape'){
        gameOver();
    }
    // console.log('player pressed', playerPressed)
    // get the expected to  pressed
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed , expectedAlphabet)

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('point')

        const currentScore = getTextElementValueById('current-score')
        console.log(currentScore)
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)



        // update score___________________________________
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)

        // // score increase
        // const newScore = currentScore + 1;

        // // sschow the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('jah')

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if(updatedLife == 0){
            // console.log('gem ovar')
           gameOver();
        }

        // get the current life_________________________________
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifetext = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifetext)

        // // mew life
        // const newLife = currentLife - 1;

        // // display the updated life
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyBoardButtonPress)

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
    // hode everything show only the playground
    hideElement('home-screen')
    hideElement('final-score')
    showElement('play-ground')

    // reset sscore and life
    setTextElementValueById('current-life' , 5)
    setTextElementValueById('current-score',0)

    continueGame()
}

function gameOver(){
    hideElement('play-ground')
    showElement('final-score')
    // update fffinal score_________
    // get the last score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore)

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextByid('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
}