window.addEventListener('scroll', reveal);

function reveal () {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowheight - revealPoint) {
            reveals[i].classList.add('active');
        } else { 
            reveals[i].classList.remove('active');
        }

    }
}
/*-- Responsive Navigation---*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
function nextImage2(currentImage) {
    var gallery = document.getElementById('gallery2');
    gallery.removeChild(currentImage);

    // Check if there are no more images left
    if (gallery.children.length === 0) {
        resetGallery2();
    }
}

function resetGallery2() {
    var gallery = document.getElementById('gallery2');
    gallery.innerHTML = ''; // Clear the gallery container

    // Add the images back
    gallery.innerHTML += `
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (1).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (2).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (3).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (4).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (5).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (6).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (7).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (8).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (9).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (10).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (11).jpg" alt="Sample Image">
        </div>
        <div class="gallery-item2" onclick="nextImage2(this)">
            <img src="image/5. Offers/offers (12).jpg" alt="Sample Image">
        </div>
    `;
}

function toggleImage(currentImage) {
    var gallery = document.getElementById('gallery');
    gallery.removeChild(currentImage);

    // Check if there are no more images left
    if (gallery.children.length === 0) {
        resetGallery();
    }
}

function resetGallery() {
    var gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear the gallery container

    // Add the images back
    gallery.innerHTML += `
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/0.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/1.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/2.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/3.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/4.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/5.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/6.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/7.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/8.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/9.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/10.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/12.jpg" alt="Sample Image">
        </div>
        <div class="gallery-item" onclick="toggleImage(this)">
            <img src="image/13.jpg" alt="Sample Image">
        </div>
    `;
}
