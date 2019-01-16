function moltenOpacity() {

    if (way === "increase") {

        if (landmarkOpacity < 1) {

            slideshowElmt.style.opacity = landmarkOpacity + speed;

            landmarkOpacity += speed;

            requestAnimationFrame(moltenOpacity);

        } else {

            way = "decrease";

            cancelAnimationFrame(moltenAnimation);
        }


    } else if (way === "decrease") {

        if (landmarkOpacity > 0) {

            slideshowElmt.style.opacity = landmarkOpacity - speed;

            landmarkOpacity -= speed;

            requestAnimationFrame(moltenOpacity);

        } else {

            landmarkOpacity = 0;

            slideshowElmt.style.opacity = landmarkOpacity;

            way = "increase";

            cancelAnimationFrame(moltenAnimation);
        }

    }

    console.log(slideshowElmt.style.opacity);
}

function slideshowRolling() {

    setTimeout(moltenOpacity, 50);

    setTimeout(moltenOpacity, 9000);

    randomValue = Math.floor(Math.random() * picturesList.length);

    // console.log(randomValue);

    slideshowElmt.style.backgroundImage = picturesList[randomValue];
}

var slideshowElmt = document.getElementById("slideshow");
// var diapoImg = getComputedStyle(slideshowElmt).backgroundImage;
// var diapoOpacity = getComputedStyle(slideshowElmt).opacity;

var picturesList = ["url(\"https://cdn.pixabay.com/photo/2016/02/19/11/51/louvre-1210004_1280.jpg\")", "url(\"https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_1280.jpg\")"];
var randomValue = Math.floor(Math.random() * picturesList.length);

var moltenAnimation = 0;
var way = "increase";
var landmarkOpacity = 0;
var speed = 0.02;

slideshowElmt.style.backgroundImage = picturesList[randomValue];
setTimeout(moltenOpacity, 50);
setTimeout(moltenOpacity, 9000);

// console.log(slideshowElmt.style.backgroundImage);

setInterval(slideshowRolling, 10000);
