const player = document.querySelector('.player');
let video = document.querySelector('.player__video'); // element
let source = document.createElement('source');
let playBtn = document.querySelector('#play');
let progress = player.querySelector('.progress');
let progressBar = player.querySelector('.progress__filled');

function play(){
    const method = video.paused ? 'play' : 'pause';
    video.paused? playBtn.innerHTML = '❚ ❚' :playBtn.innerHTML = '►' ;
    video[method](); // video.play() / video.pause()
}

function rewind10sec(){
    video.currentTime -=10; // video.currentTime = video.currentTime - 10
}

function fastForward25sec(){
    video.currentTime += 25;  // video.currentTime = video.currentTime + 25
}


function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}


function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);