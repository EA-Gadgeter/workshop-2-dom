// Importamos la función para registrar las imagenes en el observador
import {registerImage} from "./lazy";

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const newImageContainer = document.createElement("div");
    newImageContainer.classList.add("p-4");
    
    const newImage = document.createElement("img");
    newImage.className = "mx-auto";
    newImage.width = "320";
    newImage.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    newImageContainer.append(newImage);

    return newImageContainer;
};

const addImage = () => {
    const newImage = createImageNode();
    // Cada imagen que creamos la registramos en el observador
    registerImage(newImage);
    imagesContainer.append(newImage);
};

const minimum = 1;
const maximum = 122;

const imagesContainer = document.querySelector("#images");
const addButton = document.querySelector("button");

addButton.addEventListener("click", addImage);