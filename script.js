let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");

    // Hide all slides and remove active dot styling
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    // Show the current slide and activate the corresponding dot
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Automatically change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Function to generate floating hearts
function createFloatingHearts(numHearts) {
    const body = document.body;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random animation duration
        heart.style.animationDelay = `${Math.random() * 5}s`; // Random delay
        body.appendChild(heart);
    }
}

// Call function to create 20 floating hearts
createFloatingHearts(50);
