let img;
let canvas;
let applyButton = document.getElementById('applyButton');
let downloadButton = document.getElementById('downloadButton');
let bgColorInput = document.getElementById('bgColor');
let imageInput = document.getElementById('imageInput');
let dropZone = document.getElementById('dropZone');

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('previewCanvas');
    background(255);
    applyButton.disabled = true;
    downloadButton.classList.add('hidden');
}

function handleFile(file) {
    if (file.type.startsWith('image/')) {
        img = loadImage(URL.createObjectURL(file), () => {
            applyButton.disabled = false;
        });
    }
}

dropZone.addEventListener('click', () => imageInput.click());
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-blue-400');
});
dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-blue-400');
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-blue-400');
    let file = e.dataTransfer.files[0];
    handleFile(file);
});
imageInput.addEventListener('change', (e) => {
    handleFile(e.target.files[0]);
});

applyButton.addEventListener('click', () => {
    if (img) {
        let bgColor = hexToRgb(bgColorInput.value);
        loadPixels();
        img.loadPixels();
        for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
                let index = (x + y * img.width) * 4;
                let r = img.pixels[index];
                let g = img.pixels[index + 1];
                let b = img.pixels[index + 2];
                let a = img.pixels[index + 3];
                // Simple thresholding to detect background (assuming light background)
                if (r > 200 && g > 200 && b > 200 && a > 0) {
                    img.pixels[index] = bgColor.r;
                    img.pixels[index + 1] = bgColor.g;
                    img.pixels[index + 2] = bgColor.b;
                }
            }
        }
        img.updatePixels();
        image(img, 0, 0, width, height);
        downloadButton.classList.remove('hidden');
    }
});

downloadButton.addEventListener('click', () => {
    saveCanvas(canvas, 'passport_photo', 'jpg');
});

function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}
