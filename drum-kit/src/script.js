function removeTransition(e) {
    e.target?.classList?.remove('playing');
}

function playAudio(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key?.classList.add('playing');
    audio.currentTime = 0;
    audio?.play();
}

function captureKeyboardClicks(){
    var elements = document.querySelectorAll('.key'); // Array of .keys in the code
    elements.forEach(key => key?.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playAudio);
}

captureKeyboardClicks();