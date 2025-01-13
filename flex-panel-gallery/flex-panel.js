function toggleOpening() {
  var panels = document.querySelectorAll(".panel");
  for (var i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].classList.remove("active");
      //this.className += " active"; // this.className = this.className + "active"
      this.classList.add("active");
    });
  }
}

toggleOpening();
