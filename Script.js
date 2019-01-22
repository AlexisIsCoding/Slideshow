function opacityFade() {

    if (way === "increase") {

        if (landmarkOpacity < 1) {

            slideshowElmt.style.opacity = landmarkOpacity + speed;

            landmarkOpacity += speed;

            requestAnimationFrame(opacityFade);

        } else {

            way = "decrease";

            cancelAnimationFrame(animationFade);
        }


    } else if (way === "decrease") {

        if (landmarkOpacity > 0) {

            slideshowElmt.style.opacity = landmarkOpacity - speed;

            landmarkOpacity -= speed;

            requestAnimationFrame(opacityFade);

        } else {

            landmarkOpacity = 0;

            slideshowElmt.style.opacity = landmarkOpacity;

            way = "increase";

            cancelAnimationFrame(animationFade);
        }

    }

    // console.log(slideshowElmt.style.opacity);
}

function slideshowRolling() {

    firstTimeOut = setTimeout(opacityFade, 50);
    secondTimeOut = setTimeout(opacityFade, 9000);

    randomValue = Math.floor(Math.random() * picturesList.length);
    // console.log(randomValue);

    slideshowElmt.style.backgroundImage = picturesList[randomValue];
}

function slideshowReverse() {

    firstTimeOut = setTimeout(opacityFade, 50);

    optionalTimeOut = setTimeout(function () {

        randomValue = Math.floor(Math.random() * picturesList.length);
        // console.log(randomValue);

        slideshowElmt.style.backgroundImage = picturesList[randomValue];
        // console.log(slideshowElmt.style.backgroundImage);
    }, 1050);

    secondTimeOut = setTimeout(opacityFade, 1100);
}

var slideshowElmt = document.getElementById("slideshow");
// var diapoImg = getComputedStyle(slideshowElmt).backgroundImage;
// var diapoOpacity = getComputedStyle(slideshowElmt).opacity;

var picturesList = ["url(\"https://cdn.pixabay.com/photo/2016/02/19/11/51/louvre-1210004_1280.jpg\")", "url(\"https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_1280.jpg\")"];
var randomValue = undefined;

var animationFade = 0;
var way = "increase";
var landmarkOpacity = 0;
var speed = 0.02;

var firstTimeOut = undefined;
var secondTimeOut = undefined;
var optionalTimeOut = undefined;
var intervalRolling = setInterval(slideshowRolling, 10000);

slideshowRolling();
intervalRolling;

window.onfocus = function () {

    way = "decrease";
    
    slideshowReverse();

    intervalRolling = setInterval(slideshowReverse, 10000);
};


window.onblur = function () {

    way = "increase";
    
    landmarkOpacity = 1;
    slideshowElmt.style.opacity = landmarkOpacity;

    clearInterval(intervalRolling);
    clearTimeout(optionalTimeOut);
    clearTimeout(secondTimeOut);
    clearTimeout(firstTimeOut);
};