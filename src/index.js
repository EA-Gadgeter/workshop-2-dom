// Importamos la función para registrar las imagenes en el observador
import {registerImage, showImageCounter, increaseTotalImages, resetImageCounter} from "./lazy";

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const newImageContainer = document.createElement("div");
    newImageContainer.classList.add("p-4");
    
    const newImage = document.createElement("img");
    newImage.className = "mx-auto rounded-md bg-gray-600";
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
    increaseTotalImages();
    showImageCounter();
};

const cleanContainer = () => {
    imagesContainer.innerHTML = "";
    resetImageCounter();
    showImageCounter();
};

const minimum = 1;
const maximum = 122;

const imagesContainer = document.querySelector("#images");
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");

addButton.addEventListener("click", addImage);
removeButton.addEventListener("click", cleanContainer);