let baseColor = document.getElementById("base");
let blurRange = document.getElementById("blur");
let spacingRange = document.getElementById("spacing");

let image = document.getElementById("image");
let jsText = document.getElementById("hl");

baseColor.addEventListener("change", (event) => {
  image.style.setProperty("--base", `${baseColor.value}`);
  jsText.style.setProperty("--base", `${baseColor.value}`);
});
blurRange.addEventListener("change", (event) => {
  image.style.setProperty("--blur", `${blurRange.value}px`);
});
spacingRange.addEventListener("change", (event) => {
  image.style.setProperty("--spacing", `${spacingRange.value}px`);
});
