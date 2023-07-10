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
        shinyImg: 'img/pkmn-img-shiny/001_s.png',
        pokemonTypes: [types.grass],
    },
    {
        num: '002',
        name: 'COATTHIEF',
        img: 'img/pkmn-img/002.png',
        shinyImg: 'img/pkmn-img-shiny/002_s.png',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '003',
        name: 'SAQUACYN',
        img: 'img/pkmn-img/003.png',
        shinyImg: 'img/pkmn-img/003.png',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '004',
        name: 'EMBRITO',
        img: 'img/pkmn-img/004.png',
        shinyImg: 'img/pkmn-img-shiny/004_s.png',
        pokemonTypes: [types.fire],
    },
    {
        num: '005',
        name: 'DEFAULT',
        img: 'img/pkmn-img/005.png',
        shinyImg: 'img/pkmn-img-shiny/005_s.png',
        pokemonTypes: [types.fire],
    },
    {
        num: '006',
        name: 'MOTORAM',
        img: 'img/pkmn-img/006.png',
        shinyImg: 'img/pkmn-img/006.png',
        pokemonTypes: [types.fire, types.steel],
    },
    {
        num: '007',
        name: 'GUAMIRIN',
        img: 'img/pkmn-img/007.png',
        shinyImg: 'img/pkmn-img-shiny/007_s.png',
        pokemonTypes: [types.water],
    },
    {
        num: '008',
        name: 'DEFAULT',
        img: 'img/pkmn-img/008.png',
        shinyImg: 'img/pkmn-img-shiny/008_s.png',
        pokemonTypes: [types.water],
    },
    {
        num: '009',
        name: 'DEFAULT',
        img: 'img/pkmn-img/009.png',
        shinyImg: 'img/pkmn-img/009.png',
        pokemonTypes: [types.water, types.ground],
    },
    {
        num: '010',
        name: 'APEGUI',
        img: 'img/pkmn-img/010.png',
        shinyImg: 'img/pkmn-img/010.png',
        pokemonTypes: [types.normal],
    },
    {
        num: '011',
        name: 'APEVOLT',
        img: 'img/pkmn-img/011.png',
        shinyImg: 'img/pkmn-img-shiny/011_s.png',
        pokemonTypes: [types.electric],
    },
    // {
    //     num: '012',
    //     name: 'DEFAULT',
    //     img: '',
    //     pokemonTypes: [],
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
    {
        num: '015',
        name: 'DEFAULT',
        img: 'img/pkmn-img/015.png',
        shinyImg: 'img/pkmn-img/015.png',
        pokemonTypes: [types.normal, types.dark],
    },
    // {
    //     num: '016',
    //     name: 'DEFAULT',
    //     img: '',
    // },
    {
        num: '017',
        name: 'PICHU',
        img: 'img/pkmn-img/017.png',
        shinyImg: 'img/pkmn-img-shiny/017_s.png',
        pokemonTypes: [types.electric, types.normal],
    },
    {
        num: '018',
        name: 'PIKACHU',
        img: 'img/pkmn-img/018.png',
        shinyImg: 'img/pkmn-img-shiny/018_s.png',
        pokemonTypes: [types.electric, types.normal],
    },
    {
        num: '019',
        name: 'CAJUBI',
        img: 'img/pkmn-img/019.png',
        shinyImg: 'img/pkmn-img/019.png',
        pokemonTypes: [types.grass],
    },
    {
        num: '020',
        name: 'MARACAJU',
        img: 'img/pkmn-img/020.png',
        shinyImg: 'img/pkmn-img/020.png',
        pokemonTypes: [types.grass, types.flying],
    },
    {
        num: '021',
        name: 'BELLSPROUT',
        img: 'img/pkmn-img/021.png',
        shinyImg: 'img/pkmn-img/021.png',
        pokemonTypes: [types.poison, types.grass],
    },
    {
        num: '022',
        name: 'WEEPINBELL',
        img: 'img/pkmn-img/022.png',
        shinyImg: 'img/pkmn-img-shiny/022_s.png',
        pokemonTypes: [types.poison, types.grass],
    },
    {
        num: '023',
        name: 'DEFAULT',
        img: 'img/pkmn-img/023.png',
        shinyImg: 'img/pkmn-img-shiny/023_s.png',
        pokemonTypes: [types.poison, types.grass],
    },
    {
        num: '037',
        name: 'MANTYKE',
        img: 'img/pkmn-img/037.png',
        shinyImg: 'img/pkmn-img-shiny/037_s.png',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '038',
        name: 'MANTINE',
        img: 'img/pkmn-img/038.png',
        shinyImg:'img/pkmn-img-shiny/038_s.png',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '039',
        name: 'MANKYTE',
        img: 'img/pkmn-img/039.png',
        shinyImg: 'img/pkmn-img-shiny/039_s.png',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '040',
        name: 'SHRIMBODY',
        img: 'img/pkmn-img/040.png',
        shinyImg: 'img/pkmn-img-shiny/040_s.png',
        pokemonTypes: [types.ground, types.water],
    },
    {
        num: '041',
        name: 'SHRIMRYU',
        img: 'img/pkmn-img/041.png',
        shinyImg: 'img/pkmn-img-shiny/041_s.png',
        pokemonTypes: [types.dragon, types.water],
    },
    {
        num: '049',
        name: 'ANKUSHAKU',
        img: 'img/pkmn-img/049.png',
        shinyImg: 'img/pkmn-img-shiny/049_s.png',
        pokemonTypes: [types.water, types.steel],
    },
    {
        num: '050',
        name: 'CUMBULLUS',
        img: 'img/pkmn-img/050.png',
        shinyImg: 'img/pkmn-img/050.png',
        pokemonTypes: [types.fairy],
    },
    {
        num: '051',
        name: 'DEFAULT',
        img: 'img/pkmn-img/051.png',
        shinyImg: 'img/pkmn-img/051.png',
        pokemonTypes: [types.fairy, types.electric],
    },
    {
        num: '052',
        name: 'DEFAULT',
        img: 'img/pkmn-img/052.png',
        shinyImg: 'img/pkmn-img/052.png',
        pokemonTypes: [types.fairy, types.fire],
    },
    {
        num: '053',
        name: 'EEVEE',
        img: 'img/pkmn-img/053.png',
        shinyImg: 'img/pkmn-img/053.png',
        pokemonTypes: [types.normal],
    },
    {
        num: '054',
        name: 'DEFAULT',
        img: 'img/pkmn-img/054.png',
        shinyImg: 'img/pkmn-img/054.png',
        pokemonTypes: [types.steel],
    },
    {
        num: '055',
        name: 'DEFAULT',
        img: 'img/pkmn-img/055.png',
        shinyImg: 'img/pkmn-img/055.png',
        pokemonTypes: [types.ghost],
    },
    {
        num: '059',
        name: 'AZURILL',
        img: 'img/pkmn-img/059.png',
        shinyImg: 'img/pkmn-img/059.png',
        pokemonTypes: [types.normal, types.fairy],
    },
    {
        num: '060',
        name: 'MARILL',
        img: 'img/pkmn-img/060.png',
        shinyImg: 'img/pkmn-img-shiny/060_s.png',
        pokemonTypes: [types.fighting, types.fairy],
    },
    {
        num: '061',
        name: 'PINKURILL',
        img: 'img/pkmn-img/061.png',
        shinyImg: 'img/pkmn-img-shiny/061_s.png',
        pokemonTypes: [types.fighting, types.fairy],
    },
    {
        num: '062',
        name: 'BRIEBBLE',
        img: 'img/pkmn-img/062.png',
        shinyImg: 'img/pkmn-img-shiny/062_s.png',
        pokemonTypes: [types.rock],
    },
    {
        num: '063',
        name: 'DEFAULT',
        img: 'img/pkmn-img/063.png',
        shinyImg: 'img/pkmn-img-shiny/063_s.png',
        pokemonTypes: [types.rock],
    },
    {
        num: '064',
        name: 'DEFAULT',
        img: 'img/pkmn-img/064.png',
        shinyImg: 'img/pkmn-img/064.png',
        pokemonTypes: [types.rock, types.poison],
    },
    {
        num: '065',
        name: 'DRIFLOON',
        img: 'img/pkmn-img/065.png',
        shinyImg: 'img/pkmn-img/065.png',
        pokemonTypes: [types.ghost, types.fire],
    },
    {
        num: '066',
        name: 'DRIFBLIM',
        img: 'img/pkmn-img/066.png',
        shinyImg: 'img/pkmn-img/066.png',
        pokemonTypes: [types.ghost, types.fire],
    },
    {
        num: '067',
        name: 'GYMNER',
        img: 'img/pkmn-img/067.png',
        shinyImg: 'img/pkmn-img/067.png',
        pokemonTypes: [types.grass],
    },
    {
        num: '069',
        name: 'CACTTARU',
        img: 'img/pkmn-img/069.png',
        shinyImg: 'img/pkmn-img/069.png',
        pokemonTypes: [types.grass],
    },
    {
        num: '070',
        name: 'MANCACTTARU',
        img: 'img/pkmn-img/070.png',
        shinyImg: 'img/pkmn-img/070.png',
        pokemonTypes: [types.grass, types.psychic],
    },
    {
        num: '071',
        name: 'CALFLING',
        img: 'img/pkmn-img/071.png',
        shinyImg: 'img/pkmn-img-shiny/071_s.png',
        pokemonTypes: [types.normal],
    },
    {
        num: '072',
        name: 'MILTANK',
        img: 'img/pkmn-img/072.png',
        shinyImg: 'img/pkmn-img-shiny/072_s.png',
        pokemonTypes: [types.normal, types.ground],
    },
    {
        num: '073',
        name: 'TAURUS',
        img: 'img/pkmn-img/073.png',
        shinyImg: 'img/pkmn-img-shiny/073_s.png',
        pokemonTypes: [types.normal, types.ground],
    },
    {
        num: '074',
        name: 'NELLAUROS',
        img: 'img/pkmn-img/074.png',
        shinyImg: 'img/pkmn-img-shiny/074_s.png',
        pokemonTypes: [types.fighting, types.ground],
    },
    {
        num: '079',
        name: 'LARVITAR',
        img: 'img/pkmn-img/079.png',
        shinyImg: 'img/pkmn-img/079.png',
        pokemonTypes: [types.dark, types.ground],
    },
    {
        num: '080',
        name: 'CHRISALYTAR',
        img: 'img/pkmn-img/080.png',
        shinyImg: 'img/pkmn-img/080.png',
        pokemonTypes: [types.dark, types.ground],
    },
    {
        num: '081',
        name: 'INDOMITAR',
        img: 'img/pkmn-img/081.png',
        shinyImg: 'img/pkmn-img/081.png',
        pokemonTypes: [types.dark, types.poison],
    },
    {
        num: '082',
        name: 'DEFAULT',
        img: 'img/pkmn-img/082.png',
        shinyImg: 'img/pkmn-img/082.png',
        pokemonTypes: [types.dragon],
    },
    {
        num: '083',
        name: 'DEFAULT',
        img: 'img/pkmn-img/083.png',
        shinyImg: 'img/pkmn-img/083.png',
        pokemonTypes: [types.dragon],
    },
    {
        num: '084',
        name: 'DEFAULT',
        img: 'img/pkmn-img/084.png',
        shinyImg: 'img/pkmn-img/084.png',
        pokemonTypes: [types.dragon],
    },
];

const pkmnNum = document.querySelector(".pkmn-number");
const pkmnName = document.querySelector(".pkmn-name");
const pkmnImg = document.querySelector(".pkmn-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pkmnType = document.querySelector(".pkmn-type-container");
const shinyBtn = document.querySelector(".shiny");

let currentPkmn = 0;

window.addEventListener("DOMContentLoaded", function(){
    const pkmnObj = pokemons[currentPkmn];
    pkmnNum.textContent = pkmnObj.num;
    pkmnName.textContent = pkmnObj.name;
    pkmnImg.src = pkmnObj.img;
    let imgChild = '';
    pkmnObj.pokemonTypes.forEach(function (typeUrl) {
        imgChild += `<img src=${typeUrl} class="pkmn-type">`
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
        imgChild += `<img src=${typeUrl} class="pkmn-type">`
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

shinyBtn.addEventListener("click", function(){
    const pkmnObj = pokemons[currentPkmn];
    pkmnImg.src = pkmnObj.shinyImg;
});