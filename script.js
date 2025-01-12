// Splitting the word into letters and applying individual span for each letter
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

// Word transition logic
let currentwordindex = 0;
let maxwordindex = words.length - 1;
words[currentwordindex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentwordindex];
    let nextWord = currentwordindex === maxwordindex ? words[0] : words[currentwordindex + 1];

    // Animate letters of the current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // Make the next word visible
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentwordindex = currentwordindex === maxwordindex ? 0 : currentwordindex + 1;
};

// Initiate the word transition effect
changeText();
setInterval(changeText, 3000);

// Circle Skill: Create skill circles with percentage marks
const circle = document.querySelectorAll('.circle');
circle.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

// MixitUp Portfolio: Portfolio filtering
var mixer = mixitup('.portfolio-gallery');

// Active menu item: Highlight active section in menu
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky navbar: Toggle sticky class on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Toggle navbar icon on click
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

// Remove open/close states on scroll
window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
};

// Parallax Effect: Show items when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

// Observe elements with scroll effects
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
