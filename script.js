const birds = [
  {
    id: 'gorrión',
    name: 'Gorrión común',
    latin: 'Passer domesticus',
    habitat: 'Plazas y calles',
    category: 'urbano',
    season: 'Todo el año',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Passer_domesticus_2.jpg?width=800',
    alt: 'Gorrión común macho posado',
    description: 'Un vecino inseparable de la vida urbana. Forma pequeños grupos ruidosos y busca semillas y restos de comida cerca de las personas. Los machos tienen babero negro y capirote grisáceo.'
  },
  {
    id: 'mirlo',
    name: 'Mirlo común',
    latin: 'Turdus merula',
    habitat: 'Parques y jardines',
    category: 'parques',
    season: 'Todo el año',
    image: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=700&q=80',
    alt: 'Ave posada entre vegetación',
    description: 'El macho luce un plumaje negro intenso y pico amarillo; la hembra es parda. Su canto aflautado se oye a menudo al amanecer y al atardecer, desde setos y copas de árboles.'
  },
  {
    id: 'urraca',
    name: 'Urraca común',
    latin: 'Pica pica',
    habitat: 'Calles y jardines',
    category: 'urbano',
    season: 'Todo el año',
    image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=700&q=80',
    alt: 'Ave de plumaje oscuro sobre una rama',
    description: 'Inconfundible por su larga cola y el contraste blanco y negro de su plumaje, que muestra reflejos verdes y azulados al sol. Es inteligente, curiosa y muy adaptable.'
  },
  {
    id: 'carbonero',
    name: 'Carbonero común',
    latin: 'Parus major',
    habitat: 'Parques y arbolado',
    category: 'parques',
    season: 'Todo el año',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=700&q=80',
    alt: 'Pájaro pequeño en un entorno natural',
    description: 'Busca insectos entre las ramas y visita cajas nido. Se reconoce por la cabeza negra, las mejillas blancas y una franja oscura que cruza el pecho amarillo.'
  },
  {
    id: 'petirrojo',
    name: 'Petirrojo europeo',
    latin: 'Erithacus rubecula',
    habitat: 'Jardines y zonas verdes',
    category: 'parques',
    season: 'Todo el año',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=700&q=80',
    alt: 'Pájaro silvestre posado en una rama',
    description: 'Su cara y pecho anaranjados lo hacen fácil de identificar. Es territorial y suele acercarse a zonas removidas del suelo para capturar pequeños invertebrados. En invierno se deja ver especialmente bien.'
  },
  {
    id: 'cernícalo',
    name: 'Cernícalo vulgar',
    latin: 'Falco tinnunculus',
    habitat: 'Edificios y descampados',
    category: 'urbano',
    season: 'Todo el año',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80',
    alt: 'Ave rapaz en vuelo',
    description: 'Esta pequeña rapaz se cierne en el aire mientras busca presas. Mira hacia los solares y bordes de la ciudad: a veces se queda suspendida sobre un punto antes de lanzarse al suelo.'
  },
  {
    id: 'cigüeña',
    name: 'Cigüeña blanca',
    latin: 'Ciconia ciconia',
    habitat: 'Riberas y campiña',
    category: 'agua',
    season: 'Todo el año',
    image: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?auto=format&fit=crop&w=700&q=80',
    alt: 'Ave zancuda de gran tamaño',
    description: 'Grande, blanca y de patas largas, anida en edificios y estructuras altas. Cerca de Madrid también se alimenta en prados húmedos y campos abiertos, donde busca insectos y pequeños vertebrados.'
  },
  {
    id: 'golondrina',
    name: 'Golondrina común',
    latin: 'Hirundo rustica',
    habitat: 'Pueblos y zonas abiertas',
    category: 'agua',
    season: 'Primavera–verano',
    image: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&w=700&q=80',
    alt: 'Ave pequeña en vuelo',
    description: 'Llega en primavera y pasa el día cazando insectos al vuelo. Tiene cola ahorquillada y garganta rojiza. Su presencia y sus vuelos rasantes anuncian los meses cálidos.'
  }
];

const heatPoints = {
  todas: [
    [40.4168, -3.7038, 0.6],
    [40.4307, -3.6888, 0.8],
    [40.453, -3.6876, 0.7],
    [40.3976, -3.701, 0.65],
    [40.3905, -3.729, 0.75],
    [40.4513, -3.734, 0.55],
    [40.4672, -3.6778, 0.9],
    [40.4376, -3.743, 0.7],
    [40.4215, -3.6417, 0.8],
    [40.4125, -3.765, 0.6],
    [40.4668, -3.713, 0.75],
    [40.379, -3.709, 0.6],
    [40.4439, -3.669, 0.7],
    [40.4028, -3.794, 0.65],
    [40.3995, -3.6468, 0.7],
    [40.4731, -3.695, 0.82]
  ],
  gorrión: [[40.4307, -3.6888, 0.85], [40.4215, -3.6417, 0.7], [40.4376, -3.743, 0.8], [40.453, -3.6876, 0.6]],
  mirlo: [[40.4168, -3.7038, 0.75], [40.3905, -3.729, 0.8], [40.4513, -3.734, 0.72], [40.4439, -3.669, 0.6]],
  urraca: [[40.3976, -3.701, 0.8], [40.4125, -3.765, 0.7], [40.4668, -3.713, 0.6], [40.3995, -3.6468, 0.75]],
  carbonero: [[40.453, -3.6876, 0.8], [40.4672, -3.6778, 0.7], [40.4215, -3.6417, 0.72], [40.4513, -3.734, 0.68]],
  petirrojo: [[40.4307, -3.6888, 0.75], [40.3905, -3.729, 0.8], [40.379, -3.709, 0.7], [40.4376, -3.743, 0.65]],
  cernícalo: [[40.4672, -3.6778, 0.82], [40.3995, -3.6468, 0.78], [40.4439, -3.669, 0.62], [40.469, -3.695, 0.7]],
  cigüeña: [[40.4731, -3.695, 0.88], [40.3805, -3.7105, 0.72], [40.4447, -3.7668, 0.68], [40.4265, -3.6303, 0.7]],
  golondrina: [[40.4168, -3.7038, 0.7], [40.4572, -3.695, 0.8], [40.4047, -3.682, 0.75], [40.4399, -3.7386, 0.66]]
};

const activeState = {
  filter: 'todas',
  search: ''
};

const birdGrid = document.getElementById('bird-grid');
const resultCount = document.getElementById('result-count');
const emptyState = document.getElementById('empty-state');
const birdSearch = document.getElementById('bird-search');
const filters = [...document.querySelectorAll('.filter')];
const mapSpecies = document.getElementById('map-species');
const mapCount = document.getElementById('map-count');
const mapError = document.getElementById('map-error');
const dialog = document.getElementById('bird-dialog');
const dialogName = document.getElementById('dialog-name');
const dialogLatin = document.getElementById('dialog-latin');
const dialogDescription = document.getElementById('dialog-description');
const dialogHabitat = document.getElementById('dialog-habitat');
const dialogSeason = document.getElementById('dialog-season');
const dialogImage = document.getElementById('dialog-image');
const closeDialogButton = document.querySelector('.close-dialog');

function renderBirds() {
  const normalizedSearch = activeState.search.trim().toLowerCase();
  const visibleBirds = birds.filter((bird) => {
    const matchesFilter = activeState.filter === 'todas' || bird.category === activeState.filter;
    const matchesSearch = !normalizedSearch || bird.name.toLowerCase().includes(normalizedSearch) || bird.latin.toLowerCase().includes(normalizedSearch);
    return matchesFilter && matchesSearch;
  });

  birdGrid.innerHTML = visibleBirds
    .map((bird) => `
      <article class="bird-card" tabindex="0" data-bird-id="${bird.id}" aria-label="Ver ficha de ${bird.name}">
        <div class="bird-photo">
          <span class="season-tag">${bird.season}</span>
          <img src="${bird.image}" alt="${bird.alt}" loading="lazy" />
        </div>
        <div class="bird-info">
          <h3>${bird.name}</h3>
          <p class="latin">${bird.latin}</p>
          <div class="bird-meta">
            <div class="meta-row">
              <strong>Hábitat</strong>
              <span>${bird.habitat}</span>
            </div>
            <div class="meta-row">
              <strong>Ver</strong>
              <span>${bird.season}</span>
            </div>
          </div>
        </div>
      </article>
    `)
    .join('');

  resultCount.textContent = `${visibleBirds.length} ${visibleBirds.length === 1 ? 'especie' : 'especies'}`;
  emptyState.style.display = visibleBirds.length === 0 ? 'block' : 'none';

  birdGrid.querySelectorAll('.bird-card').forEach((card) => {
    const birdId = card.dataset.birdId;
    card.addEventListener('click', () => openDialog(birdId));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDialog(birdId);
      }
    });
  });
}

function openDialog(birdId) {
  const bird = birds.find((item) => item.id === birdId);
  if (!bird) return;

  dialogName.textContent = bird.name;
  dialogLatin.textContent = bird.latin;
  dialogDescription.textContent = bird.description;
  dialogHabitat.textContent = bird.habitat;
  dialogSeason.textContent = bird.season;
  dialogImage.src = bird.image;
  dialogImage.alt = bird.alt;
  dialog.showModal();
}

function setupFilters() {
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      activeState.filter = button.dataset.filter;
      filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      renderBirds();
    });
  });

  birdSearch.addEventListener('input', (event) => {
    activeState.search = event.target.value;
    renderBirds();
  });
}

let map;
let heatLayer;

function renderHeatMap(selectedSpecies = 'todas') {
  if (!window.L || !window.L.heatLayer) {
    mapError.style.display = 'block';
    return;
  }

  const points = heatPoints[selectedSpecies] || heatPoints.todas;
  mapCount.textContent = `Muestra ilustrativa · ${points.length} puntos`;

  if (!map) {
    map = L.map('sightings-map', { scrollWheelZoom: false }).setView([40.4168, -3.7038], 11.2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);
  }

  if (heatLayer) {
    map.removeLayer(heatLayer);
  }

  heatLayer = L.heatLayer(points, {
    radius: 28,
    blur: 20,
    maxZoom: 13,
    minOpacity: 0.55,
    max: 1.0
  }).addTo(map);
}

function setupMapFilter() {
  mapSpecies.addEventListener('change', (event) => {
    const selected = event.target.value;
    renderHeatMap(selected);
  });
}

function initialize() {
  renderBirds();
  setupFilters();
  setupMapFilter();
  renderHeatMap('todas');

  closeDialogButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.querySelector('.feature-link')?.addEventListener('click', () => {
    openDialog('petirrojo');
  });
}

window.addEventListener('DOMContentLoaded', initialize);
