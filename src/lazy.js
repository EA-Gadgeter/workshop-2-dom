// Función que se usa en el filtrado de los entries
const isIntersecting = (entry) => {

	// Filtramos aquellos que estan intersectando la vista el usuario
	// es decir o estan apenas entrando a la vista, o saliendo
	return entry.isIntersecting;
};

// Función que se ejecuta con cada entrie, o imagen
const loadImage = (entry) => {

	const imageContainer = entry.target;
	const image = imageContainer.firstChild;


	// Obtenemos la URL del dataset
	const url = image.dataset.src;

	// Le decimos al navegador que cambie la imagen
	image.src = url;
	
	// Incrementamos el total de imagenes cargadas
	loadedImages++;
	showImageCounter();
	
	// Y que la deje de obeservar, para que no se ejecute la acción
	observer.unobserve(imageContainer);
};

/*
El IntersectionObserver es un API que, entre varias
otras cosas, nos permite ver los elementos que estan
actualmente A LA VISTA el usuario en el navegador

Creamos un nuevo observador
*/
const observer = new IntersectionObserver(entries => {
	/* 
	En la siguiente linea filtramos los entries segun una función (en lugar de usar una anonima) y
	hacemos con cada entrie una "accion"
	*/
	entries.filter(isIntersecting).forEach(loadImage);
});

// Función que se encarga de hacer que el observador observe... cada imagen en específico
export const registerImage = (image) => {
	observer.observe(image);
};

// Función para incrementar el total de imagenes
export const increaseTotalImages = () => totalImages++;

// Función que muestra un reporte de las imagenes
export const showImageCounter = () => {
	console.log(`Total de imagenes: ${totalImages}`);
	console.log(`Imagenes cargadas: ${loadedImages}`);
};

export const resetImageCounter = () => {
	totalImages = 0;
	loadedImages = 0;
};

let totalImages = 0;
let loadedImages = 0;