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

var slideshowElmt = document.getElementById("slideshow");
// var diapoImg = getComputedStyle(slideshowElmt).backgroundImage;
// var diapoOpacity = getComputedStyle(slideshowElmt).opacity;

var picturesList = ["url(\"https://cdn.pixabay.com/photo/2016/02/19/11/51/louvre-1210004_1280.jpg\")", "url(\"https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_1280.jpg\")"];
var randomValue = Math.floor(Math.random() * picturesList.length);

var animationFade = 0;
var way = "increase";
var landmarkOpacity = 0;
var speed = 0.02;

var firstTimeOut = setTimeout(opacityFade, 50);
var secondTimeOut = setTimeout(opacityFade, 9000);
var intervalRolling = setInterval(slideshowRolling, 10000);

slideshowElmt.style.backgroundImage = picturesList[randomValue];
// console.log(slideshowElmt.style.backgroundImage);

firstTimeOut;
secondTimeOut;
intervalRolling;

window.onfocus = function () {

    way = "increase";

    slideshowElmt.style.backgroundImage = picturesList[randomValue];
    // console.log(slideshowElmt.style.backgroundImage);
    
    firstTimeOut = setTimeout(opacityFade, 50);
    secondTimeOut = setTimeout(opacityFade, 9000);
    intervalRolling = setInterval(slideshowRolling, 10000);
};


window.onblur = function () {
    
    if (way === "increase") {
      
        way = "decrease";
    };

    landmarkOpacity = 0;
    slideshowElmt.style.opacity = landmarkOpacity;

    clearInterval(intervalRolling);
    clearTimeout(secondTimeOut);
    clearTimeout(firstTimeOut);

};
