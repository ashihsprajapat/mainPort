
const textArray = ["Engineer", "Software Developer", "Full Stack web Developer", ];
let currentIndex = 0;
let currentText = '';
let isDeleting = false;
let charIndex = 0;

function rotateText() {
    const textRotator = document.getElementById('text-rotator');
    
    if (isDeleting) {
        currentText = textArray[currentIndex].substring(0, charIndex--);
    } else {
        currentText = textArray[currentIndex].substring(0, charIndex++);
    }

    textRotator.textContent = currentText;

    if (!isDeleting && charIndex === textArray[currentIndex].length) {
        setTimeout(() => { isDeleting = true; }, 1000); // Pause before deleting
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false; // Start adding new text
        charIndex = 0;
        currentIndex = (currentIndex + 1) % textArray.length; // Move to the next text
    }
}

// Initial call to start the rotation
rotateText();

// Change text every 100 milliseconds
setInterval(rotateText, 100);
