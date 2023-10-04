///////////////
// VARIABLES //
///////////////
var menuButton = document.querySelector('.menu-button');
var kruisje = document.querySelector('.close-menu');
var heleNav = document.querySelector('nav');
var marioHeadNav = document.querySelector('.mario-nav');

var scrollTrigger = document.querySelector('.scroll-trigger');
var articlesToSlideUp = document.querySelectorAll('.cards-with-button article');

var reducedMotionCheckbox = document.querySelector(".checkmark");

var sounds = [
    'sounds/im-luigi.mp3',
    'sounds/peach.mp3',
    'sounds/toad.mp3',
];

var characterSoundButton = document.querySelector(".character-sound");

var articles = document.querySelectorAll('.scroll article');



//////////////////////////////
////  JAVASCRIPT ALGEMEEN ////
//////////////////////////////

heleNav.classList.add('hidden');

////////////////////
// HAMBURGER MENU //
////////////////////
function openMenu() {
    heleNav.classList.remove('hidden');
    menuButton.classList.add('hidden')
}

function closeMenu() {
    heleNav.classList.add('hidden');
    menuButton.classList.remove('hidden')
}

menuButton.addEventListener("click", openMenu);
kruisje.addEventListener("click", closeMenu);


//////////////////////////////
// MARIO ANIMATIE NAVIGATIE //
//////////////////////////////
menuButton.addEventListener('click', () => {
    marioHeadNav.classList.add('slideFromBottom');
});


////////////////////
// REDUCED MOTION //
////////////////////
reducedMotionCheckbox.addEventListener("click", function() {
    var reducedMotionContainer = document.querySelector("body");
        reducedMotionContainer.classList.toggle("reduced-motion-active");
        console.log('reduced motion toggle');
});


// console.log(window.location.pathname);

// if (window.location.pathname === '/index.html' || window.location.pathname === '/') {







// Deze code haalt de huidige url op zodat enkel de code van de gewenste pagina gaat draaien.
// Dit... omdat er anders errors voorkomen in de console omdat de browser de classes niet herkent bij de eventlisteners.
var huidigeURL = window.location.href;
var homepageURLOne = "https://zwiersm.github.io/blokweb/index.html";
var homepageURLTwo = "http://127.0.0.1:5500/index.html";
var homepageURLThree = "http://127.0.0.1:5500/"
var charactersURLOne = "http://127.0.0.1:5500/characters.html";
var charactersURLTwo = "https://zwiersm.github.io/blokweb/characters.html";

console.log(huidigeURL);

document.addEventListener('DOMContentLoaded', pageChecker)
////////////////////////////////////////
////  ALLE JAVASCRIPT VOOR HOMEPAGE ////
////////////////////////////////////////
function pageChecker(){
// if (huidigeURL.indexOf("http://127.0.0.1:5500/index.html") || huidigeURL.indexOf("https://zwiersm.github.io/blokweb/index.html")){
if (huidigeURL === homepageURLOne || huidigeURL === homepageURLTwo || huidigeURL === homepageURLThree){

console.log('Page1');
////////////////
// LAADSCHERM //
////////////////

// window.onload = function () {
//     setTimeout(function () {
//         document.getElementById('loading-screen').style.display = 'none';
//         document.body.style.overflow = 'visible';
//     }, 1800);
// };

/////////////////////////////
// SCROLL ANIMATIE HOMEPAGE//
/////////////////////////////
  // Functie om de artikelen omhoog te laten schuiven
  function slideUpArticles() {
    articlesToSlideUp.forEach((article) => {
      article.classList.add('slideUp');
    });
    // Verwijder de scroll event listener om te voorkomen dat de animatie opnieuw wordt afgespeeld
    window.removeEventListener('scroll', scrollHandler);
  }
  // Event listener voor scrollen
  function scrollHandler() {
    var buttonRect = scrollTrigger.getBoundingClientRect();
    // Controleer of de knop binnen het zichtbare deel van het scherm is
    if (buttonRect.top < window.innerHeight && buttonRect.top >= 0) {
      // Als de knop zichtbaar is, roep dan de functie aan om de artikelen omhoog te laten schuiven
      slideUpArticles();
    }
  }
  // Voeg een event listener toe voor scrollen
  window.addEventListener('scroll', scrollHandler);

// } if (huidigeURL.indexOf("characters.html") || huidigeURL.indexOf("http://127.0.0.1:5500/characters.html")){
} if (huidigeURL === charactersURLOne || huidigeURL === charactersURLTwo){

    console.log('Page2');
///////////////////////////////////
////  JAVASCRIPT VOOR PAGINA 2 ////
///////////////////////////////////

///////////////////////////////
// SCROLL SOUND OP CHARACTERS//
///////////////////////////////
function playSound(soundIndex) {
    var audio = new Audio(sounds[soundIndex]);
    audio.play();
}

// Functie voor de Intersection Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        var articleIndex = Array.from(entry.target.parentElement.children).indexOf(entry.target);
        if (entry.boundingClientRect.left <= 0) {
            playSound(articleIndex);
            console.log(`Artikel ${articleIndex + 1} is nu in beeld`);
            // Stop de observer nadat het geluid is afgespeeld om herhaling te voorkomen
            observer.unobserve(entry.target);
        }
    });
}

// Maak een Intersection Observer voor elk artikel
articles.forEach((article, index) => {
    var observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: [0]
    });
    observer.observe(article);
});



//////////////////////////////////////////
//KNOP OM CHARACTER GELUID AAN TE ZETTEN//
//////////////////////////////////////////
function toggleCharacterSound() {
    console.log('klik gedetecteerd op sound button')
    if (characterSoundButton.textContent === "Character Sound: Off") {
        characterSoundButton.textContent = "Character Sound: On";
    } else {
        characterSoundButton.textContent = "Character Sound: Off";
    }
}

characterSoundButton.addEventListener("click", toggleCharacterSound);

} 
// else if (huidigeURL.indexOf("detailpagina.html")) {

// }

};

// if (window.location.pathname === 'characters.html' || window.location.pathname === '/') 

// const charactersPage = document.querySelector('.characters');
// charactersPage.addEventListener('DOMContentLoaded', pageTwo);

// function pageTwo(){

// };





//observe en entry.boundingClientRect kunnen uitleggen
  



///////////////////////////
//CODE WAT NIET GELUKT IS//
///////////////////////////
//3E PAGINA KLIKBAAR : WERKT NIET
// Geprobeerd:
//  - DOM aanpassen
//  - Arrays
//  - Chat GPT

// const button1 = document.querySelector('#button1');
// const button2 = document.querySelector('#button2');
// const characterImage = document.querySelector('.character-detail img');
// const characterArticle = document.querySelector('.character-detail article');

// // Functie om de inhoud te wijzigen naar Luigi
// function changeToLuigi() {
//     characterImage.src = "./image/pagina2/luigi-stack-closed.png";
//     characterArticle.querySelector('h2').textContent = "Luigi";
//     characterArticle.querySelector('p').textContent = "Luigi's beschrijving hier...";
//     console.log('luigi');
//     // Voeg hier de rest van de Luigi-gegevens toe
// }

// // Functie om de inhoud terug te veranderen naar Mario
// function changeToMario() {
//     characterImage.src = "./image/pagina2/mario-stack-closed.png";
//     characterArticle.querySelector('h2').textContent = "Mario";
//     characterArticle.querySelector('p').textContent = "Mario's beschrijving hier...";
//     // Voeg hier de rest van de Mario-gegevens toe
// }

// // Voeg event listeners toe aan de buttons
// button1.addEventListener('click', changeToMario);
// button2.addEventListener('click', changeToLuigi);