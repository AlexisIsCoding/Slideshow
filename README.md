# Diaporama / Slideshow

#### Français
Créer un diaporama grâce à un fondu d'opacité.

#### English
Creating slideshow with Opacity fade.

## Langages / Languages

- HTML
- CSS
- Javascript

## Présentation / Presentation 

#### Français
J'ai cherché à réaliser dernièrement un diaporama, pour un projet personnel, faisant office d'images de fond animées sur la page principale d'un site dedié à la photographie, où quelques photos seraient ainsi présentées avant que le client ne vienne jeter un oeil à la galerie.

N'ayant pour l'instant que des notions d'HTML, CSS et Javascript, j'ai commencé à créer quelque chose de rudimentaire, avec mes connaîssances, et à l'aide de plusieurs threads, sur differents forums, mais la plupart présentant des programmes nécéssitant des connaissances en JQuery ou PHP, j'ai voulu faire quelque chose de plus accèssible et, bien que des choses soient à revoir encore, un minimum fonctionnel.

#### English
I've been looking for a slide show, for a personal project, as an animated background image on the main page of a photography website, where some photos would be presented before the client came to take a look at the gallery.

As for now only notions of HTML, CSS and Javascript, I started to create something rudimentary, with my knowledge and using several topics, on different forums, but most presenting programs requiring knowledge in JQuery or PHP, I wanted to do something more accessible and, although things are to be reviewed again, functional.

## Structure

### Mise en page / Layout

- Index.html
- Mise_en_page/..
	- Bootstrap/..
	- Fonts/..
	- Index.css
	- Index.js

##### Français
Le fichier Index.html ainsi que les fichiers du dossier Mise_en_page servent à présenter le Script.js principale. Des modifications peuvent y être aportées au fur est à mesure, pour rendre la page html plus agréable visuellement, mais ne sont en rien nécéssaires au diaporama, cela peut très bien être votre propre mise en page, vos propres polices et vos propres fonctionnalités.

##### English
The Index.html file and the files in the Mise_en_page folder are used to present the main Script.js. Changes can be made to them as they are, to make the html page more visually pleasing, but are not necessary for the slideshow, it could very well be your own layout, your own fonts and your own features.

### Script

- Script.js

##### Français
Les fichiers Styles.css et Script.js sont nécéssaires au diaporama. Le Script applique un interval d'animation au background-image d'un élément grâce à une liste d'url.

> Ici, et à titre d'exemple, les photos présentées sont hébergés sur internet, mais cela peut être des photos à vous, en local ou sur votre serveur.

Puis il se charge, à chaques début et fin d'interval, de diminuer et d'augmenter progressivement la valeur de l'opacité de l'élément, selon une valeur de vitesse, qui corresponds à la valeur que l'on ajoute et retire à l'opacité en un temps donné.

##### English
The Styles.css and Script.js files are needed for the slideshow. The Script applies an animation interval to the background-image of an element through a list of urls.

> Here, and as an example, the photos presented are hosted on the internet, but it can be your pictures, locally or on your server.

Then, at each beginning and end of the interval, it will gradually decrease and increase the value of the opacity's element, according to a speed value, which corresponds to the value that is added and removed at opacity in a given time.

### Style

- Style.css

##### Français
Le Style applique à l'élément les principaux styles à modifier via le Script comme sa taille, son opacité, son background-image, ainsi que quelques suggestions de présentation tels que :

> {background-size: cover;background-position: center;}

##### English
The Style applies to the element the main styles to modify via the Script like its size, its opacity, its background-image, as well as some suggestions of presentation such as:

> {background-size: cover; background-position: center;}

## Suggestions & Participations

#### Français
Toutes suggestions sont les bienvenues, que ce soit en termes de mise en page ou bien de fonctionalités du diaporama, le but étant de le présenté visuellement mais aussi de maintenir une séparation entre fichiers nécéssaires et fichiers de présentation, afin de laisser la possibilité de ne récupérer que l'essentiel, facilement et aussi simplement soit-il.

La branche master portant principalement sur l'accèssibilité, le fondu d'opacité et orientée Front-End, je pense à créer plusieurs branches selon les différentes modifications suggérées et apportées, pour peut être proposer différentes modèles de diaporama par la suite, qu'en pensez vous ? 

#### English
Any suggestions are welcome, either in terms of layout or functions of the slideshow, the purpose being to present it visually but also to maintain a separation between necessary files and presentation files, in order to leave the possibility of not to recover that essential, easily and as simply as it is.

The master branch focused mainly on accessibility, opacity fading and Front-End oriented, I think to create several branches according to the various changes suggested and made, to maybe offer different models of slideshow later, that in do you think?

## Auteurs / Authors

- **Alexis** - *Projet initial* - [AlexisIsCoding](https://github.com/AlexisIsCoding)

Liste des [contributeurs](https://github.com/AlexisIsCoding/Slideshow/contributors) qui y ont participés.

# Sources / Acknowledgments

- [README.md Template / Rédiger un README.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) par Billie Thompson ([@PurpleBooth](https://github.com/PurpleBooth))
- [Développez.com](https://www.developpez.net/)
- [OpenClassrooms.com](https://www.openclassrooms.com/)
