var description = document.createElement("section");
description.className = "row";

var descriptionArt = document.createElement("article");
descriptionArt.className = "col-xs-12 col-sm-12 col-md-12 col-lg-12";

var descriptionTitle = document.createElement("h1");
descriptionTitle.setAttribute("id", "title");
descriptionTitle.textContent = "Diaporama / Slideshow";

var descriptionDiv = document.createElement("div");
descriptionDiv.className = "row";

var descriptionEx = document.createElement("div");
descriptionEx.className = "col-xs-12 col-sm-12 col-md-12 col-lg-12";

var descriptionFr = document.createElement("p");
descriptionFr.setAttribute("id", "exampleFr");
descriptionFr.textContent = "Ceci est l'exemple d'un diaporama créé grâce à un fondu d'opacité, rendant ainsi plus agréable le changement entre chaque image..";

var descriptionEn = document.createElement("p");
descriptionEn.setAttribute("id", "exampleEn");
descriptionEn.textContent = "This is an example of a slide show created by an opacity fade, making it easier to change between each image..";

descriptionEx.appendChild(descriptionFr);
descriptionEx.appendChild(descriptionEn);

descriptionDiv.appendChild(descriptionEx);

descriptionArt.appendChild(descriptionTitle);
descriptionArt.appendChild(descriptionDiv)

description.appendChild(descriptionArt);
                          

var slideshow = document.createElement("section");
slideshow.className = "row";

var slideshowArt = document.createElement("article");
slideshowArt.className = "col-xs-12 col-sm-12 col-md-12 col-lg-12";

var slideshowDiv = document.getElementById("slideshow");

var slideshowAside = document.createElement("aside");
slideshowAside.className = "col-xs-12 col-sm-12 col-md-12 col-lg-12";

var slideshowFr = document.createElement("p");
slideshowFr.setAttribute("id", "disclaimerFr");
slideshowFr.innerHTML = "<p>Photos libres de droit, hébergée sur <a href=\"https://pixabay.com/\" target=\"_blank\">Pixabay.com</a>.</p>";

var slideshowEn = document.createElement("p");
slideshowEn.setAttribute("id", "disclaimerEn");
slideshowEn.innerHTML = "<p>Royalty free photos, hosted on <a href=\"https://pixabay.com/\" target=\"_blank\">Pixabay.com</a>.</p>";

slideshowAside.appendChild(slideshowFr);
slideshowAside.appendChild(slideshowEn);

slideshowArt.appendChild(slideshowDiv);

slideshow.appendChild(slideshowArt);
slideshow.appendChild(slideshowAside);

var container = document.getElementById("conteneur");

container.appendChild(description);
container.appendChild(slideshow);