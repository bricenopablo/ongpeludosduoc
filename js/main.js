'use strict';

import rellenarAnimales from './rellenarAnimales.js';
import gatos from './gatos.js';
import perros from './perros.js';

const ANIMALES_DIV = document.querySelector('#animales');

rellenarAnimales(gatos, ANIMALES_DIV);
rellenarAnimales(perros, ANIMALES_DIV);
