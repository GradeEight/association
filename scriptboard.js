const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const textColorPicker = document.getElementById('textColorPicker');
const brushSizeSelector = document.getElementById('brushSize');
const clearCanvasButton = document.getElementById('clearCanvas');
const saveCanvasButton = document.getElementById('saveCanvas');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');
const textButton = document.getElementById('textButton');
const textInput = document.getElementById('textInput');
const textSizeInput = document.getElementById('textSize');
const eraserButton = document.getElementById('eraserButton');
const canvasWidthInput = document.getElementById('canvasWidth');
const canvasHeightInput = document.getElementById('canvasHeight');
const resizeCanvasButton = document.getElementById('resizeCanvas');
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('startScreen');
const paintContainer = document.getElementById('paintContainer');

canvas.width = 800; // Default canvas width
canvas.height = 600; // Default canvas height

let painting = false;
let brushSize = 5;
let actions = [];
let redoStack = [];
let isEraser = false;
let isTextMode = false; // Track if text mode is active

// Fill the canvas with white color
function fillCanvas() {
    ctx.fillStyle = '#FFFFFF'; // Set fill color to white
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas
}

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
    saveState();
}

function draw(e) {
    if (!painting || isTextMode) return; // Prevent drawing when in text mode

    ctx.lineWidth = brushSize; // Set line width
    ctx.lineCap = 'round'; // Set line cap style

    if (isEraser) {
        ctx.strokeStyle = '#FFFFFF'; // Eraser color (white)
    } else {
        ctx.strokeStyle = colorPicker.value; // Get color from color picker
    }

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function saveState() {
    actions.push(canvas.toDataURL());
    redoStack = []; // Clear redo stack on new action
}

function undo() {
    if (actions.length > 0) {
        redoStack.push(actions.pop());
        const lastAction = actions[actions.length - 1];
        if (lastAction) {
            const img = new Image();
            img.src = lastAction;
            img.onload = () => ctx.drawImage(img, 0, 0);
        } else {
            fillCanvas(); // Fill with white if no actions left
        }
    }
}

function redo() {
    if (redoStack.length > 0) {
        const lastRedo = redoStack.pop();
        actions.push(lastRedo);
        const img = new Image();
        img.src = lastRedo;
        img.onload = () => ctx.drawImage(img, 0, 0);
    }
}

function saveCanvas() {
    const link = document.createElement('a');
    link.download = 'my_drawing.png';
    link.href = canvas.toDataURL();
    link.click();
}

function addText(e) {
    const text = textInput.value;
    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;
    const textSize = textSizeInput.value; // Get text size from input
    ctx.font = `${textSize}px Arial`; // Set font size
    ctx.fillStyle = textColorPicker.value; // Get text color from input
    ctx.fillText(text, x, y);
    textInput.value = ''; // Clear the input after adding text
    textInput.style.display = 'none'; // Hide the text input
    isTextMode = false; // Exit text mode
    brushSizeSelector.disabled = false; // Enable brush size selector
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('click', (e) => {
    if (isTextMode) {
        addText(e);
    }
});

clearCanvasButton.addEventListener('click', () => {
    fillCanvas(); // Fill canvas with white on clear
    actions = []; // Clear actions on canvas clear
    redoStack = []; // Clear redo stack
});

saveCanvasButton.addEventListener('click', saveCanvas);

undoButton.addEventListener('click', undo);
redoButton.addEventListener('click', redo);

brushSizeSelector.addEventListener('input', (e) => {
    brushSize = e.target.value }); // Update brush size based on range input

textButton.addEventListener('click', () => {
    deactivateAllTools(); // Deactivate all tools
    isTextMode = true; // Activate text mode
    textInput.style.display = 'block'; // Show text input
    textInput.focus(); // Focus on the text input
});

eraserButton.addEventListener('click', () => {
    deactivateAllTools(); // Deactivate all tools
    isEraser = !isEraser; // Toggle eraser mode
    if (isEraser) {
        brushSizeSelector.value = 20; // Set a default brush size for eraser
        brushSize = 20; // Set brush size for eraser
    }
});

resizeCanvasButton.addEventListener('click', () => {
    const newWidth = canvasWidthInput.value;
    const newHeight = canvasHeightInput.value;
    canvas.width = newWidth;
    canvas.height = newHeight;
    fillCanvas(); // Fill canvas with white after resizing
});

document.addEventListener('click', (e) => {
    if (!textInput.contains(e.target) && e.target !== textButton) {
        textInput.style.display = 'none';
        isTextMode = false; // Exit text mode when clicking outside
        brushSizeSelector.disabled = false; // Enable brush size selector
    }
});

function deactivateAllTools() {
    isTextMode = false; // Deactivate text mode
    isEraser = false; // Deactivate eraser mode
    brushSizeSelector.disabled = false; // Enable brush size selector
    textInput.style.display = 'none'; // Hide text input
}

// Initialize the canvas with white background
fillCanvas(); // Fill the canvas with white on initialization
deactivateAllTools(); // Ensure all tools are deactivated initially
brushSizeSelector.disabled = false; // Enable brush size selector

// Start button functionality
startButton.addEventListener('click', () => {
    startScreen.style.display = 'none'; // Hide start screen
    paintContainer.style.display = 'flex'; // Show paint container
});
