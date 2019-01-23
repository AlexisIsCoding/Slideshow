// ------------------------------- Fonctions | Functions -------------------------------

// ********** Animation de fondu d'opacité **********
// ********** Opacity Fade Animation **********
function opacityFade() {

    if (way === "increase") { // Montée d'opacité jusqu'à 1 | Opacity's up to 1
        
        if (landmarkOpacity < 1) {

            slideshowElmt.style.opacity = landmarkOpacity + speed;

            landmarkOpacity += speed;

            requestAnimationFrame(opacityFade);

        } else { // Opacité = 1 : Changement de sens - Fin de l'animation | Opacity = 1 : Direction Change - Animation end

            way = "decrease";

            cancelAnimationFrame(animationFade);
        }

    } else if (way === "decrease") { // Descente d'opacité jusqu'à 0 | Opacity's down to 0

        if (landmarkOpacity > 0) {

            slideshowElmt.style.opacity = landmarkOpacity - speed;

            landmarkOpacity -= speed;

            requestAnimationFrame(opacityFade);

        } else { // Remise à zéro de l'Opacité : Changement de sens - Fin de l'animation | Opacity's set to 0 : Direction Change - Animation end

            landmarkOpacity = 0;

            slideshowElmt.style.opacity = landmarkOpacity;

            way = "increase";

            cancelAnimationFrame(animationFade);
        }

    }

}



// ********** Fonction de roulement du diaporama (Chargement initial de la page) **********
// ********** "Onload" Slideshow rolling function (Initial case) **********
function slideshowRolling() {

    // Délai de la montée d'opacité | Opacity rise Timeout
    firstTimeOut = setTimeout(opacityFade, 50);
    
    // Délai de la descente d'opacité | Opacity descent Timeout
    secondTimeOut = setTimeout(opacityFade, 9000);

    // Définition d'une valeur aléatoire | Setting a random value
    randomValue = Math.floor(Math.random() * picturesList.length);
    // console.log(randomValue);

    // Changement d'image parmis un élément aléatoire de la liste de photo | Image change from random element in the pictures list
    slideshowElmt.style.backgroundImage = picturesList[randomValue];
}



// ********** Fonction de roulement du diaporama (en cas de changement d'onglet) **********
// ********** "Onblur/Onfocus" Slideshow rolling function ("Changing tab" case) **********
function slideshowReverse() {
    
    // Délai de la descente d'opacité | Opacity descent Timeout
    firstTimeOut = setTimeout(opacityFade, 50);

    optionalTimeOut = setTimeout(function () { // Délai du changement aléatoire de l'image | Picture random change's Timeoout
        
        // Définition d'une valeur aléatoire | Setting a random value
        randomValue = Math.floor(Math.random() * picturesList.length);

        // Changement d'image parmis un élément aléatoire de la liste de photo | Image change from random element in the pictures list
        slideshowElmt.style.backgroundImage = picturesList[randomValue];
    }, 1050);

    // Délai de la montée d'opacité | Opacity rise Timeout
    secondTimeOut = setTimeout(opacityFade, 1100);
}



// ------------------------------- Variables communes | Commons variables -------------------------------

// Élément contenant le diaporama | Element containing the slide show 
var slideshowElmt = document.getElementById("slideshow");

// Liste d'images | Pictures list
var picturesList = ["url(\"https://cdn.pixabay.com/photo/2016/02/19/11/51/louvre-1210004_1280.jpg\")", "url(\"https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_1280.jpg\")"];

// Variable de la valeur aléatoire | Random value variable
var randomValue = undefined;

// Variables des valeurs de direction, de repère et de vitesse du changement d'opacité | Variables of direction, landmark and speed values of the opacity change
var way = "increase";
var landmarkOpacity = 0;
var speed = 0.02;

var animationFade = 0;

// Variables des différents délais utilisés | Timeout used's variables 
var firstTimeOut = undefined;
var secondTimeOut = undefined;
var optionalTimeOut = undefined;
var intervalRolling = setInterval(slideshowRolling, 10000);

// ------------------------------- Initialisation | Initailization -------------------------------

// ********** Initailisation du diaporama initial au chargement de la page **********
// ********** Initailization of the initial slideshowRolling when page is on load **********
slideshowRolling();
intervalRolling;


// ********** Initailisation du diaporama inversé à la reprise du focus sur l'onglet **********
// ********** Initailization of the slideshowReverse when the focus is reopened on the tab **********
window.onfocus = function () { 

    way = "decrease";
    
    slideshowReverse();

    intervalRolling = setInterval(slideshowReverse, 10000);
};


// ********** Maintien de l'image et de l'opacité & réinitialisation des délais et des fonctions à la perte du focus (Changement d'onglet) **********
// ********** Maintain image and opacity & reset timeout and functions at focus loss (Tab change) **********
window.onblur = function () {

    way = "increase";
    
    landmarkOpacity = 1;
    slideshowElmt.style.opacity = landmarkOpacity;

    // Réinitialisation des délais et des fonctions | Reset timeout and functions
    clearInterval(intervalRolling);
    clearTimeout(optionalTimeOut);
    clearTimeout(secondTimeOut);
    clearTimeout(firstTimeOut);
};
