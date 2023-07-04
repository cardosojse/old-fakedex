const types = {
    water: 'img/pkmn-type/water.png', 
    bug: 'img/pkmn-type/bug.png',
    dark: 'img/pkmn-type/dark.png',
    dragon: 'img/pkmn-type/dragon.png',
    electric: 'img/pkmn-type/electric.png',
    fairy: 'img/pkmn-type/fairy.png',
    fighting: 'img/pkmn-type/fighting.png',
    fire: 'img/pkmn-type/fire.png',
    flying: 'img/pkmn-type/flying.png',
    ghost: 'img/pkmn-type/ghost.png',
    grass: 'img/pkmn-type/grass.png',
    ground: 'img/pkmn-type/ground.png',
    ice: 'img/pkmn-type/ice.png',
    normal: 'img/pkmn-type/normal.png',
    poison: 'img/pkmn-type/poison.png',
    psychic: 'img/pkmn-type/psychic.png',
    rock: 'img/pkmn-type/rock.png',
    steel: 'img/pkmn-type/steel.png',
};

const pokemons = [
    {
        num: '001',
        name: 'COATTINY',
        img: 'img/pkmn-img/001.png',
        pokemonTypes: [types.grass],
    },
    {
        num: '002',
        name: 'COATTHIEF',
        img: 'img/pkmn-img/002.png',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '003',
        name: 'SAQUACYN',
        img: 'img/pkmn-img/003.png',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '004',
        name: 'EMBRITO',
        img: 'img/pkmn-img/004.png',
        pokemonTypes: [types.fire],
    },
    // {
    //     num: '005',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/005.png',
    // },
    // {
    //     num: '006',
    //     name: 'MOTORAM',
    //     img: 'img/pkmn-img/006.png',
    // },
    // {
    //     num: '007',
    //     name: 'GUAMIRIN',
    //     img: 'img/pkmn-img/007.png',
    // },
    // {
    //     num: '008',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/008.png',
    // },
    // {
    //     num: '009',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/009.png',
    // },
    // {
    //     num: '010',
    //     name: 'DEFAULT',
    //     img: '',
    // },
    // {
    //     num: '011',
    //     name: 'DEFAULT',
    //     img: '',
    // },
    // {
    //     num: '012',
    //     name: 'DEFAULT',
    //     img: '',
    // },
    // {
    //     num: '013',
    //     name: 'DEFAULT',
    //     img: '',
    // },
    // {
    //     num: '014',
    //     name: 'DEFAULT',
    //     img: '',
    // },
    // {
    //     num: '015',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/015.png',
    // },
    // {
    //     num: '016',
    //     name: 'DEFAULT',
    //     img: '',
    // },
    // {
    //     num: '017',
    //     name: 'PICHU',
    //     img: 'img/pkmn-img/017.png',
    // },
    // {
    //     num: '018',
    //     name: 'PIKACHU',
    //     img: 'img/pkmn-img/018.png',
    // },
    // {
    //     num: '019',
    //     name: 'CAJUBI',
    //     img: 'img/pkmn-img/019.png',
    // },
    // {
    //     num: '020',
    //     name: 'MARACAJU',
    //     img: 'img/pkmn-img/020.png',
    // },
    // {
    //     num: '021',
    //     name: 'BELLSPROUT',
    //     img: 'img/pkmn-img/021.png',
    // },
    // {
    //     num: '022',
    //     name: 'WEEPINBELL',
    //     img: 'img/pkmn-img/022.png',
    // },
    // {
    //     num: '023',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/023.png',
    // },
    // {
    //     num: '038',
    //     name: 'MANTINE',
    //     img: 'img/pkmn-img/038.png',
    // },
    // {
    //     num: '040',
    //     name: 'SHRIMBODYY',
    //     img: 'img/pkmn-img/040.png',
    // },
    // {
    //     num: '041',
    //     name: 'SHRIMRYU',
    //     img: 'img/pkmn-img/041.png',
    // },
    // {
    //     num: '049',
    //     name: 'ANKUSHAKU',
    //     img: 'img/pkmn-img/049.png',
    // },
    // {
    //     num: '050',
    //     name: 'CUMBULLUS',
    //     img: 'img/pkmn-img/050.png',
    // },
    // {
    //     num: '051',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/051.png',
    // },
    // {
    //     num: '052',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/052.png',
    // },
    // {
    //     num: '053',
    //     name: 'EEVEE',
    //     img: 'img/pkmn-img/053.png',
    // },
    // {
    //     num: '054',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/054.png',
    // },
    // {
    //     num: '055',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/055.png',
    // },
    // {
    //     num: '059',
    //     name: 'AZURILL',
    //     img: 'img/pkmn-img/059.png',
    // },
    // {
    //     num: '060',
    //     name: 'MARILL',
    //     img: 'img/pkmn-img/060.png',
    // },
    // {
    //     num: '061',
    //     name: 'PINKURILL',
    //     img: 'img/pkmn-img/061.png',
    // },
    // {
    //     num: '065',
    //     name: 'DRIFLOON',
    //     img: 'img/pkmn-img/065.png',
    // },
    // {
    //     num: '066',
    //     name: 'DRIFBLIM',
    //     img: 'img/pkmn-img/066.png',
    // },
    // {
    //     num: '067',
    //     name: 'GYMNER',
    //     img: 'img/pkmn-img/067.png',
    // },
    // {
    //     num: '069',
    //     name: 'CACTTARU',
    //     img: 'img/pkmn-img/069.png',
    // },
    // {
    //     num: '070',
    //     name: 'MANCACTTARU',
    //     img: 'img/pkmn-img/070.png',
    // },
    // {
    //     num: '071',
    //     name: 'CALFLING',
    //     img: 'img/pkmn-img/071.png',
    // },
    // {
    //     num: '072',
    //     name: 'MILTANK',
    //     img: 'img/pkmn-img/072.png',
    // },
    // {
    //     num: '073',
    //     name: 'TAURUS',
    //     img: 'img/pkmn-img/073.png',
    // },
    // {
    //     num: '079',
    //     name: 'LARVITAR',
    //     img: 'img/pkmn-img/079.png',
    // },
    // {
    //     num: '080',
    //     name: 'CHRITALLYS',
    //     img: 'img/pkmn-img/080.png',
    // },
    // {
    //     num: '081',
    //     name: 'INDOMITAR',
    //     img: 'img/pkmn-img/081.png',
    // },
    // {
    //     num: '082',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/082.png',
    // },
    // {
    //     num: '083',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/083.png',
    // },
    // {
    //     num: '084',
    //     name: 'DEFAULT',
    //     img: 'img/pkmn-img/084.png',
    // },
];

const pkmnNum = document.querySelector(".pkmn-num");
const pkmnName = document.querySelector(".pkmn-name");
const pkmnImg = document.querySelector(".pkmn-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pkmnType = document.querySelector(".pkmn-type");

let currentPkmn = 0;

window.addEventListener("DOMContentLoaded", function(){
    const pkmnObj = pokemons[currentPkmn];
    pkmnNum.textContent = pkmnObj.num;
    pkmnName.textContent = pkmnObj.name;
    pkmnImg.src = pkmnObj.img;
    let imgChild = '';
    pkmnObj.pokemonTypes.forEach(function (typeUrl) {
        imgChild += `<img src=${typeUrl} class="type1-img">`
    });
    pkmnType.innerHTML = imgChild;
});

function showData(pkmn){
    const pkmnObj = pokemons[pkmn];
    pkmnNum.textContent = pkmnObj.num;
    pkmnName.textContent = pkmnObj.name;
    pkmnImg.src = pkmnObj.img;
    let imgChild = '';
    pkmnObj.pokemonTypes.forEach(function (typeUrl) {
        imgChild += `<img src=${typeUrl} class="type1-img">`
    });
    pkmnType.innerHTML = imgChild;
};

prevBtn.addEventListener("click", function(){
    currentPkmn--;
    if (currentPkmn < 0){
        currentPkmn = pokemons.length - 1;
    }
    showData(currentPkmn);
});

nextBtn.addEventListener("click", function(){
    currentPkmn++;
    if (currentPkmn > pokemons.length - 1){
        currentPkmn = 0;
    }
    showData(currentPkmn);
});