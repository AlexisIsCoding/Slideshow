function fonduOpacite() {

    if (direction === "augmentation") {

        if (opaciteRepere < 1) {

            diapoElmt.style.opacity = opaciteRepere + vitesse;

            opaciteRepere += vitesse;

            requestAnimationFrame(fonduOpacite);

        } else {

            direction = "diminution";

            cancelAnimationFrame(animationFondu);
        }


    } else if (direction === "diminution") {

        if (opaciteRepere > 0) {

            diapoElmt.style.opacity = opaciteRepere - vitesse;

            opaciteRepere -= vitesse;

            requestAnimationFrame(fonduOpacite);

        } else {

            opaciteRepere = 0;

            diapoElmt.style.opacity = opaciteRepere;

            direction = "augmentation";

            cancelAnimationFrame(animationFondu);
        }

    }

    console.log(diapoElmt.style.opacity);
}

function diapoRoulement() {

    setTimeout(fonduOpacite, 50);

    setTimeout(fonduOpacite, 9000);

    aleatoire = Math.floor(Math.random() * listeImg.length);

    console.log(aleatoire);

    diapoElmt.style.backgroundImage = listeImg[aleatoire];
}

var diapoElmt = document.getElementById("diapo");
// var diapoImg = getComputedStyle(diapoElmt).backgroundImage;
// var diapoOpacity = getComputedStyle(diapoElmt).opacity;

var listeImg = ["url(\"../z-img/img1.jpg\")", "url(\"../z-img/img2.jpg\")"];
var aleatoire = Math.floor(Math.random() * listeImg.length);

var animationFondu = 0;
var direction = "augmentation";
var opaciteRepere = 0;
var vitesse = 0.02;

diapoElmt.style.backgroundImage = listeImg[aleatoire];
setTimeout(fonduOpacite, 50);
setTimeout(fonduOpacite, 9000);

console.log(diapoElmt.style.backgroundImage);

setInterval(diapoRoulement, 10000);
