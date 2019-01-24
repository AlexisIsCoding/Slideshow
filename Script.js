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



// ********** Fonction de selection aléatoire de l'image à afficher **********

// ********** Random selection function of the image to be displayed **********
function picturesLoop() {

    if (!ephemeralList.length) { // Réinitialisation de la liste Éphémère à partir de la liste initale | Resetting the Ephemeral list from the initial list

        ephemeralList = picturesList.slice();
    }

    // Définition d'une valeur aléatoire | Setting a random value
    randomValue = Math.floor(Math.random() * ephemeralList.length);
    
    
    
    if (ephemeralList[randomValue] === slideshowElmt.style.backgroundImage) { // Redéfinition de la valeur aléatoire si celle-ci est identique à la valeur précedente, en cas de réinitialisation de liste | Redefining the random value if it's identical to the previous value, in case of list resetting

        ephemeralList.splice(randomValue, 1);

        if (!ephemeralList.length) {

            ephemeralList = picturesList.slice();

            ephemeralList.splice(randomValue, 1);
        }

        randomValue = Math.floor(Math.random() * ephemeralList.length);

        slideshowElmt.style.backgroundImage = ephemeralList[randomValue];

        ephemeralList.splice(randomValue, 1);

    } else { // Continuité en cas d'unicité de la valeur aléatoire | Continuity in case of uniqueness of the random value

        // Changement d'image à partir d'un élément aléatoire de la liste éphémère de photo | Image change from random element in the ephemeral pictures list
        slideshowElmt.style.backgroundImage = ephemeralList[randomValue];

        // Suppression de l'image selectionnée aléatoirement dans la liste | Deleting the randomly selected image from the list
        ephemeralList.splice(randomValue, 1);
    }

}



// ********** Fonction de roulement du diaporama (Chargement initial de la page) **********

// ********** "Onload" Slideshow rolling function (Initial case) **********
function slideshowRolling() {

    // Délai de la montée d'opacité | Opacity rise Timeout
    firstTimeOut = setTimeout(opacityFade, 50);

    // Délai de la descente d'opacité | Opacity descent Timeout
    secondTimeOut = setTimeout(opacityFade, 9000);

    picturesLoop();

    if (!intervalRolling) {

        intervalRolling = setInterval(slideshowRolling, 10000);
    }

}



// ********** Fonction de roulement du diaporama (en cas de changement d'onglet) **********

// ********** "Onblur/Onfocus" Slideshow rolling function ("Changing tab" case) **********
function slideshowReverse() {

    // Délai de la descente d'opacité | Opacity descent Timeout
    firstTimeOut = setTimeout(opacityFade, 50);

    // Délai du changement aléatoire de l'image | Picture random change's Timeoout
    optionalTimeOut = setTimeout(picturesLoop, 1050);

    // Délai de la montée d'opacité | Opacity rise Timeout
    secondTimeOut = setTimeout(opacityFade, 1100);

    if (!intervalReverse) {

        intervalReverse = setInterval(slideshowReverse, 10000);
    }

}



// ------------------------------- Variables communes | Commons variables -------------------------------

// Élément contenant le diaporama | Element containing the slide show 
var slideshowElmt = document.getElementById("slideshow");

// Liste d'images initail | Initial pictures list
var picturesList = ["url(\"https://cdn.pixabay.com/photo/2016/02/19/11/51/louvre-1210004_1280.jpg\")", "url(\"https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_1280.jpg\")"];

// Liste d'image éphémère (renouvelable) | Ephemeral image list (renewable)
var ephemeralList = [];

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
var intervalRolling = undefined;
var intervalReverse = undefined;



// ------------------------------- Initialisation | Initailization -------------------------------

// ********** Initailisation du diaporama initial au chargement de la page **********

// ********** Initailization of the initial slideshowRolling when page is on load **********
slideshowRolling();


// ********** Initailisation du diaporama inversé à la reprise du focus sur l'onglet **********

// ********** Initailization of the slideshowReverse when the focus is reopened on the tab **********
window.onfocus = function () {

    // Changement de sens du fondu d'opacité | Changing way of the opacity fade
    way = "decrease";

    slideshowReverse();

};


// ********** Maintien de l'image et de l'opacité & réinitialisation des délais et des fonctions à la perte du focus (Changement d'onglet) **********

// ********** Maintain image and opacity & reset timeout and functions at focus loss (Tab change) **********
window.onblur = function () {

    // Préparation au changement de sens du fondu d'opacité | Preparation for changing the way of the opacity fade
    way = "increase";

    // Maintien de l'opacité au maximum et de l'image en cours | Maintaining maximum opacity and current image
    landmarkOpacity = 1;
    slideshowElmt.style.opacity = landmarkOpacity;

    // Réinitialisation des délais et des fonctions | Reset timeout and functions
    clearInterval(intervalReverse);
    clearInterval(intervalRolling);
    clearTimeout(optionalTimeOut);
    clearTimeout(secondTimeOut);
    clearTimeout(firstTimeOut);

    intervalReverse = undefined;
};
