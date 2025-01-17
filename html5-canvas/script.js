const canvas = document.getElementById('draw');
const ctx = canvas.getContext("2d");
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

    function draw(event) {
        isDrawing = true;

        //context path 
        ctx.beginPath();

        //check the current position of the cursor ->mousedown(click, whenever mouse keys are pressed)
        ctx.moveTo(lastX, lastY);

        // destination or the stroke ending at -> capture from the event mousemove ( movement of the comp mouse /trackpad)
        ctx.lineTo(event.offsetX, event.offsetY);

        hue++;
        [lastX, lastY] = [event.offsetX, event.offsetY];

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;// `${value}` Template literals

        if (ctx.lineWidth >= 30 || ctx.lineWidth <= 1) {
            direction = !direction;
        }
        // drawing 
        ctx.stroke();
    }


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
  
  
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);