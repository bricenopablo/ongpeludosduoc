const gatos = [
	{
		nombre: 'Ginger',
		imagen: '../img/gatos/ginger.jpg',
		edad: 3,
		raza: 'Michi',
		sexo: 'Macho',
		tamano: 'B',
		se_adapta: 'No',
		con_ninos: 'No',
		con_perros: 'Sí',
		con_gatos: 'No',
		energia: 'Alta'
	},
	{
		nombre: 'Tommy',
		imagen: '../img/gatos/tommy.png',
		edad: 2,
		raza: 'Michi',
		sexo: 'Macho',
		tamano: 'M',
		se_adapta: 'Sí',
		con_ninos: 'Sí',
		con_perros: 'Sí',
		con_gatos: 'No',
		energia: 'Baja'
	},
	{
		nombre: 'Lucifer',
		imagen: '../img/gatos/lucifer.png',
		edad: 2,
		raza: 'Michi',
		sexo: 'Macho',
		tamano: 'S',
		se_adapta: 'Sí',
		con_ninos: 'Sí',
		con_perros: 'Sí',
		con_gatos: 'Sí',
		energia: 'Alta'
	}
];
const perros = [
	{
		nombre: 'Flaca',
		imagen: '../img/perros/flaca.png',
		edad: 8,
		raza: 'Terrier',
		sexo: 'Macho',
		tamano: 'S',
		se_adapta: 'Sí',
		con_ninos: 'Sí',
		con_perros: 'No',
		con_gatos: 'No',
		energia: 'Media'
	},
	{
		nombre: 'Niña',
		imagen: '../img/perros/nina.png',
		edad: 10,
		raza: 'Toller',
		sexo: 'Hembra',
		tamano: 'M',
		se_adapta: 'Sí',
		con_ninos: 'Sí',
		con_perros: 'Sí',
		con_gatos: 'Sí',
		energia: 'Baja'
	},
	{
		nombre: 'Cachulo',
		imagen: '../img/perros/cachulo.png',
		edad: 6,
		raza: 'Golden Retriever',
		sexo: 'Macho',
		tamano: 'B',
		se_adapta: 'Sí',
		con_ninos: 'Sí',
		con_perros: 'Sí',
		con_gatos: 'No',
		energia: 'Media'
	}
];

const ANIMALES_DIV = document.querySelector('#animales');

const rellenarAnimales = (array) => {
	array.forEach((animal) => {
		ANIMALES_DIV.innerHTML += `
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <img src="${animal.imagen}" alt="${animal.nombre}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title text-center">${animal.nombre}</h5>
                </div>
                <div class="card-footer d-flex justify-content-center">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${animal.nombre}">Ver
                        detalles</button>
                </div>
            </div>
            <div class="modal fade" id="${animal.nombre}" tabindex="-1" aria-labelledby="animal-${animal.nombre}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bolder" id="animal-${animal.nombre}">${animal.nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" style="row-gap:20px">
                                    <div class="col-12 col-sm-6">
                                        <img src="${animal.imagen}" class="img-thumbnail" alt="${animal.nombre} Imagen">
                                    </div>
                                    <div class="col-12 col-sm-6">
                                    <h3 class="fw-bolder">Bio</h3>
                                    <ul>
                                        <li><b>Nombre:</b> ${animal.nombre}</li>
                                        <li><b>Edad:</b> ${animal.edad}</li>
                                        <li><b>Raza:</b> ${animal.raza}</li>
                                        <li><b>Sexo:</b> ${animal.sexo}</li>
                                        <li><b>Tamaño:</b> ${animal.tamano}</li>
                                    </ul>
                                    </div>
                                    <div class="col-12 col-sm-12">
                                    <h3 class="fw-bolder">Más información</h3>
                                    <ul>
                                        <li><b>Se adapta a departamento:</b> ${animal.se_adapta}</li>
                                        <li><b>Convive con niños:</b> ${animal.con_ninos}</li>
                                        <li><b>Convive con perros:</b> ${animal.con_perros}</li>
                                        <li><b>Convive con gatos:</b> ${animal.con_gatos}</li>
                                        <li><b>Nivel de energía:</b> ${animal.energia}</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
	});
};

rellenarAnimales(gatos);
rellenarAnimales(perros);
