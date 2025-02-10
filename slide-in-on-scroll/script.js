const slideImages = document.querySelectorAll('.slide-in'); 
//querySelector All will give an array result for all className matchign the parenthesis
window.addEventListener("scroll", debounce(checkSlideHeight)); // I had to give a functionName in parenthesis :P


function checkSlideHeight() {
    slideImages.forEach((img) =>{
        const slideAtHeight = (window.scrollY + window.innerHeight) - img.height;
        let isImgShown = slideAtHeight > img.offsetTop;
        //offsetTop: read-only property returns the distance from the outer border of the current element
         //innerHeight -> is to ensure the webpages size
         //scrollY -> to what height we are at right now,adding the total 
         //height/2(as per Wes Bos) -> wonder why? nothign too particular
         //but basically at least half of the image tag height is to be considered for 
         //to show the image in advance
         if(isImgShown){
            img.classList.add('active');
         }
         else{
            img.classList.remove('active');
         }

        // steps of 4.0 on each scroll on the mouse wheel: random finding I had lol
    }); // using arrow functions
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout; 
    //only after the tird dynamic value we check if timeout is completed
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
