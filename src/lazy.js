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

// Función que se encarga de hacer que el observador observe... cada imagen específico
export const registerImage = (image) => {
	observer.observe(image);
};