const gatos = [
	{
		nombre: 'Ginger',
		imagen: '/img/ginger.jpg'
	},
	{
		nombre: 'Tommy',
		imagen: '/img/tommy.png'
	},
	{
		nombre: 'Lucifer',
		imagen: '/img/lucifer.png'
	}
];
const perros = [
	{
		nombre: 'Flaca',
		imagen: '/img/flaca.png'
	},
	{
		nombre: 'Niña',
		imagen: '/img/nina.png'
	},
	{
		nombre: 'Cachulo',
		imagen: '/img/cachulo.png'
	}
];

const ANIMALES_DIV = document.querySelector('#animales');

const rellenar_animales = (array) => {
	array.forEach((animal) => {
		ANIMALES_DIV.innerHTML += `
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <img src="${animal.imagen}" alt="${animal.nombre}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title text-center">${animal.nombre}</h5>
                </div>
                <div class="card-footer d-flex justify-content-center">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${animal.nombre}">Ver detalles</button>
                </div>
            </div>
            <div class="modal fade" id="${animal.nombre}" tabindex="-1" aria-labelledby="animal-${animal.nombre}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="animal-${animal.nombre}">${animal.nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>`;
	});
};

rellenar_animales(gatos);
rellenar_animales(perros);
