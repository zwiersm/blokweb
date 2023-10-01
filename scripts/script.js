// // JavaScript Document
console.log("hi");

var menuButton = document.querySelector('.menu-button');
var kruisje = document.querySelector('.close-menu');
var heleNav = document.querySelector('nav');
var marioHeadNav = document.querySelector('.mario-nav');

var scrollTrigger = document.querySelector('.scroll-trigger');
var articlesToSlideUp = document.querySelectorAll('.cards-with-button article');

heleNav.classList.add('hidden');

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

// LAADSCHERM
window.onload = function () {
    setTimeout(function () {
        // Verberg het laadscherm na 4 seconden
        document.getElementById('loading-screen').style.display = 'none';
        // Toon de rest van de pagina-inhoud
        document.body.style.overflow = 'visible';
    }, 1800); // 4000 milliseconden = 4 seconden
};


// MARIO ANIMATIE NAVIGATIE
menuButton.addEventListener('click', () => {
    // Voeg de animatieklasse toe aan .marioheadnav
    marioHeadNav.classList.add('slideFromBottom');
});




  


// SCROLL ANIMATIE HOMEPAGE
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





// // GELUID OP DE SCROLL
// function luigiSound() {
//     var audio = new Audio('sounds/im-luigi.mp3');
//     audio.play();
//   }

// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       var luigiRect = entry.boundingClientRect;
//       if (luigiRect.left <= 0) {
//         luigiSound();
//         // Voer hier je gewenste acties uit wanneer de linkerkant van het artikel de linkerkant van het viewport raakt
//         console.log('luigi is nu in beeld');
//         // Stop de observer als je slechts één keer wilt reageren
//         observer.unobserve(entry.target);
//       }
//     });
//   }
  
//   // Selecteer het artikel dat je wilt observeren
//   var luigi = document.querySelector('.scroll article:nth-of-type(1)'); 
  
//   // Maak een Intersection Observer aan
//   var observer = new IntersectionObserver(handleIntersection, {
//     root: null, // Het viewport wordt gebruikt als het root-element
//     rootMargin: '0px', // Geen marges toegevoegd aan het viewport
//     threshold: [0] // Observer actief wanneer het artikel volledig in het zicht is
//   });
  
//   // Start het observeren van het artikel
//   observer.observe(luigi);

// Geluiden voor elk artikel
var sounds = [
    'sounds/im-luigi.mp3',
    'sounds/peach.mp3',
    'sounds/toad.m4a',
    // Voeg hier geluidspaden toe voor elk artikel
];


// Functie om een geluid af te spelen
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

// Selecteer alle <article> elementen binnen .scroll
var articles = document.querySelectorAll('.scroll article');

// Maak een Intersection Observer voor elk artikel
articles.forEach((article, index) => {
    var observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: [0]
    });
    observer.observe(article);
});









  





//KNOP OM CHARACTER GELUID AAN TE ZETTEN
var characterSoundButton = document.querySelector(".character-sound");

function toggleCharacterSound() {
    if (characterSoundButton.textContent === "Character Sound: Off") {
        characterSoundButton.textContent = "Character Sound: On";
    } else {
        characterSoundButton.textContent = "Character Sound: Off";
    }
}

characterSoundButton.addEventListener("click", toggleCharacterSound);


//observe en entry.boundingClientRect kunnen uitleggen
//knop om geluid aan te zetten
  


//REDUCED MOTION KNOP
var reducedMotionCheckbox = document.getElementById("reduced-motion-button");

reducedMotionCheckbox.addEventListener("change", function() {
    var reducedMotionContainer = document.querySelector("body");

    if (reducedMotionCheckbox.checked) {
        reducedMotionContainer.classList.add("reduced-motion-active");
        console.log('reduced motion aan');
    } else {
        reducedMotionContainer.classList.remove("reduced-motion-active");
        console.log('reduced motion uit');
    }
});


