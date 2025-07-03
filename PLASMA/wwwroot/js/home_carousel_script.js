const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
const indicatorContainers = document.querySelectorAll('.indicator-container');
const descriptions = document.querySelectorAll('.carousel-des');

let hasLooped = false;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;
let autoSlideInterval;

slides.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    slides.style.transition = 'none';
});

slides.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    currentTranslate = prevTranslate + (currentX - startX);
    slides.style.transform = `translateX(${currentTranslate}px)`;
});

slides.addEventListener('mouseup', handleDragEnd);
slides.addEventListener('mouseleave', handleDragEnd);

slides.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    slides.style.transition = 'none';
});

slides.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    currentTranslate = prevTranslate + (currentX - startX);
    slides.style.transform = `translateX(${currentTranslate}px)`;
});

slides.addEventListener('touchend', handleDragEnd);

function handleDragEnd() {
    if (!isDragging) return;
    isDragging = false;

    const dragDistance = currentTranslate - prevTranslate;
    if (dragDistance > 100) {
        hasLooped = currentIndex == 0;
        currentIndex = currentIndex == 0 ? indicators.length - 1 : Math.max(currentIndex - 1, 0); // Move to the previous slide
    }
    else if (dragDistance < -100) {
        hasLooped = currentIndex == 3;
        currentIndex = currentIndex == 3 ? 0 : Math.min(currentIndex + 1, indicators.length - 1); // Move to the next slide
    }

    updateCarouselPosition();
}

function updateCarouselPosition() {
    const slideWidth = document.querySelector('.carousel').offsetWidth; // Get the current viewport width
    currentTranslate = -currentIndex * slideWidth;
    prevTranslate = currentTranslate;

    if (hasLooped) {
        slides.style.transition = 'none';
        hasLooped = false;
    }
    else
        slides.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
    slides.style.transform = `translateX(${currentTranslate}px)`;

    // Update indicator and description states
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
    descriptions.forEach((desc, index) => {
        desc.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % indicators.length; // Loop back to the first slide
    updateCarouselPosition();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 10000);
}

// Add click event to indicator containers for manual navigation
indicatorContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide when clicked
        currentIndex = index;
        updateCarouselPosition();
        startAutoSlide(); // Restart auto-slide after manual navigation
    });
});

updateCarouselPosition();
startAutoSlide();
window.addEventListener('resize', updateCarouselPosition);

// ------------------------------------------------------------------------------------------- //

const slides_iii = document.querySelector('.slides_iii');
const indicators_iii = document.querySelectorAll('.indicator_iii');
const indicatorContainers_iii = document.querySelectorAll('.indicator-container_iii');
const descriptions_iii = document.querySelectorAll('.carousel-des_iii');

let hasLooped_iii = false;
let isDragging_iii = false;
let startX_iii = 0;
let currentTranslate_iii = 0;
let prevTranslate_iii = 0;
let currentIndex_iii = 0;
let autoSlideInterval_iii;

slides_iii.addEventListener('mousedown', (e) => {
    isDragging_iii = true;
    startX_iii = e.clientX;
    slides_iii.style.transition = 'none';
});

slides_iii.addEventListener('mousemove', (e) => {
    if (!isDragging_iii) return;
    const currentX_iii = e.clientX;
    currentTranslate_iii = prevTranslate_iii + (currentX_iii - startX_iii);
    slides_iii.style.transform = `translateX(${currentTranslate_iii}px)`;
});

slides_iii.addEventListener('mouseup', handleDragEnd_iii);
slides_iii.addEventListener('mouseleave', handleDragEnd_iii);

slides_iii.addEventListener('touchstart', (e) => {
    isDragging_iii = true;
    startX_iii = e.touches[0].clientX;
    slides_iii.style.transition = 'none';
});

slides_iii.addEventListener('touchmove', (e) => {
    if (!isDragging_iii) return;
    const currentX_iii = e.touches[0].clientX;
    currentTranslate_iii = prevTranslate_iii + (currentX_iii - startX_iii);
    slides_iii.style.transform = `translateX(${currentTranslate_iii}px)`;
});

slides_iii.addEventListener('touchend', handleDragEnd_iii);

function handleDragEnd_iii() {
    if (!isDragging_iii) return;
    isDragging_iii = false;

    const dragDistance_iii = currentTranslate_iii - prevTranslate_iii;
    if (dragDistance_iii > 100) {
        hasLooped_iii = currentIndex_iii == 0;
        currentIndex_iii = currentIndex_iii == 0 ? indicators_iii.length - 1 : Math.max(currentIndex_iii - 1, 0); // Move to the previous slide
    }
    else if (dragDistance_iii < -100) {
        hasLooped_iii = currentIndex_iii == 3;
        currentIndex_iii = currentIndex_iii == 3 ? 0 : Math.min(currentIndex_iii + 1, indicators_iii.length - 1); // Move to the next slide
    }

    updateCarouselPosition_iii();
}

function updateCarouselPosition_iii() {
    const slideWidth_iii = document.querySelector('.carousel_iii').offsetWidth; // Get the current viewport width
    currentTranslate_iii = -currentIndex_iii * slideWidth_iii;
    prevTranslate_iii = currentTranslate_iii;

    if (hasLooped_iii) {
        slides_iii.style.transition = 'none';
        hasLooped_iii = false;
    }
    else
        slides_iii.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
    slides_iii.style.transform = `translateX(${currentTranslate_iii}px)`;

    // Update indicator and description states
    indicators_iii.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex_iii);
    });
    descriptions_iii.forEach((desc, index) => {
        desc.classList.toggle('active', index === currentIndex_iii);
    });
}

function nextSlide_iii() {
    currentIndex_iii = (currentIndex_iii + 1) % indicators_iii.length; // Loop back to the first slide
    updateCarouselPosition_iii();
}

function startAutoSlide_iii() {
    autoSlideInterval_iii = setInterval(() => {
        nextSlide_iii();
    }, 10000);
}

// Add click event to indicator containers for manual navigation
indicatorContainers_iii.forEach((container, index) => {
    container.addEventListener('click', () => {
        clearInterval(autoSlideInterval_iii); // Stop auto-slide when clicked
        currentIndex_iii = index;
        updateCarouselPosition_iii();
        startAutoSlide_iii(); // Restart auto-slide after manual navigation
    });
});

updateCarouselPosition_iii();
startAutoSlide_iii();
window.addEventListener('resize', updateCarouselPosition_iii);


//function adjustBodyMargin() {
//    let stickyImage = document.getElementById('fixed_bg');
//    let content = document.getElementById('home_body');

//    let imageHeight = stickyImage.clientHeight;

//    content.style.marginTop = `-${imageHeight}px`;
//}

//adjustBodyMargin();
//window.addEventListener('load', adjustBodyMargin);
//window.addEventListener('resize', adjustBodyMargin);