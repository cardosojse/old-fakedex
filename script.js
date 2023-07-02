const pokemon = [
    {
        num: '001',
        name: 'COATTINY',
        img: 'img/pkmn-img/001.png',
        type1: 'img/pkmn-type/grass.png',
        type2: '',
    },
    {
        num: '002',
        name: 'COATTHIEF',
        img: 'img/pkmn-img/002.png',
        type1: 'img/pkmn-type/grass.png',
        type2: 'img/pkmn-type/dark.png',
    },
    {
        num: '003',
        name: 'SAQUACYN',
        img: 'img/pkmn-img/003.png',
        type1: 'img/pkmn-type/grass.png',
        type2: 'img/pkmn-type/dark.png',
    },
    {
        num: '004',
        name: 'EMBRITO',
        img: 'img/pkmn-img/004.png'
    },
    {
        num: '005',
        name: 'DEFAULT',
        img: 'img/pkmn-img/005.png',
    },
    {
        num: '006',
        name: 'MOTORAM',
        img: 'img/pkmn-img/006.png',
    },
    {
        num: '007',
        name: 'GUAMIRIN',
        img: 'img/pkmn-img/007.png',
    },
    {
        num: '008',
        name: 'DEFAULT',
        img: 'img/pkmn-img/008.png',
    },
    {
        num: '009',
        name: 'DEFAULT',
        img: 'img/pkmn-img/009.png',
    },
    {
        num: '010',
        name: 'DEFAULT',
        img: '',
    },
    {
        num: '011',
        name: 'DEFAULT',
        img: '',
    },
    {
        num: '012',
        name: 'DEFAULT',
        img: '',
    },
    {
        num: '013',
        name: 'DEFAULT',
        img: '',
    },
    {
        num: '014',
        name: 'DEFAULT',
        img: '',
    },
    {
        num: '015',
        name: 'DEFAULT',
        img: 'img/pkmn-img/015.png',
    },
    {
        num: '016',
        name: 'DEFAULT',
        img: '',
    },
    {
        num: '017',
        name: 'PICHU',
        img: 'img/pkmn-img/017.png',
    },
    {
        num: '018',
        name: 'PIKACHU',
        img: 'img/pkmn-img/018.png',
    },
    {
        num: '019',
        name: 'CAJUBI',
        img: 'img/pkmn-img/019.png',
    },
    {
        num: '020',
        name: 'MARACAJU',
        img: 'img/pkmn-img/020.png',
    },
    {
        num: '021',
        name: 'BELLSPROUT',
        img: 'img/pkmn-img/021.png',
    },
    {
        num: '022',
        name: 'WEEPINBELL',
        img: 'img/pkmn-img/022.png',
    },
    {
        num: '023',
        name: 'DEFAULT',
        img: 'img/pkmn-img/023.png',
    },
    {
        num: '039',
        name: 'MANTINE',
        img: 'img/pkmn-img/039.png',
    },
    {
        num: '040',
        name: 'SHRIMCEUS',
        img: 'img/pkmn-img/040.png',
    },
    {
        num: '049',
        name: 'ANKUSHAKU',
        img: 'img/pkmn-img/049.png',
    },
    {
        num: '050',
        name: 'CUMBULLUS',
        img: 'img/pkmn-img/050.png',
    },
    {
        num: '051',
        name: 'DEFAULT',
        img: 'img/pkmn-img/051.png',
    },
    {
        num: '052',
        name: 'DEFAULT',
        img: 'img/pkmn-img/052.png',
    },
    {
        num: '053',
        name: 'EEVEE',
        img: 'img/pkmn-img/053.png',
    },
    {
        num: '054',
        name: 'DEFAULT',
        img: 'img/pkmn-img/054.png',
    },
    {
        num: '055',
        name: 'DEFAULT',
        img: 'img/pkmn-img/055.png',
    },
    {
        num: '059',
        name: 'AZURILL',
        img: 'img/pkmn-img/059.png',
    },
    {
        num: '060',
        name: 'MARILL',
        img: 'img/pkmn-img/060.png',
    },
    {
        num: '061',
        name: 'PINKURILL',
        img: 'img/pkmn-img/061.png',
    },
    {
        num: '065',
        name: 'DRIFLOON',
        img: 'img/pkmn-img/065.png',
    },
    {
        num: '066',
        name: 'DRIFBLIM',
        img: 'img/pkmn-img/066.png',
    },
    {
        num: '071',
        name: 'CALFLING',
        img: 'img/pkmn-img/071.png',
    },
    {
        num: '079',
        name: 'LARVITAR',
        img: 'img/pkmn-img/079.png',
    },
    {
        num: '080',
        name: 'CHRITALLYS',
        img: 'img/pkmn-img/080.png',
    },
    {
        num: '081',
        name: 'INDOMITAR',
        img: 'img/pkmn-img/081.png',
    },
    {
        num: '082',
        name: 'DEFAULT',
        img: 'img/pkmn-img/082.png',
    },
    {
        num: '083',
        name: 'DEFAULT',
        img: 'img/pkmn-img/083.png',
    },
    {
        num: '084',
        name: 'DEFAULT',
        img: 'img/pkmn-img/084.png',
    },
];

const pkmnNum = document.getElementsByClassName("pkmn-num")[0];
const pkmnName = document.getElementsByClassName("pkmn-name")[0];
const pkmnImg = document.getElementsByClassName("pkmn-img")[0];
const pkmnType1 = document.querySelector("type1-img");
const pkmnType2 = document.querySelector(".type2-img");
const prevBtn = document.getElementsByClassName("chevron prev")[0];
const nextBtn = document.getElementsByClassName("chevron next")[0];


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    const item = pokemon[currentItem];
    pkmnNum.textContent = item.num;
    pkmnName.textContent = item.name;
    pkmnImg.src = item.img;
    pkmnType1.src = item.type1;
});

function showData(pkmn){
    const item = pokemon[pkmn];
    pkmnNum.textContent = item.num;
    pkmnName.textContent = item.name;
    pkmnImg.src = item.img;
    pkmnType1.src = item.type1;
};

prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = pokemon.length - 1;
    }
    showData(currentItem);
});

nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > pokemon.length - 1){
        currentItem = 0;
    }
    showData(currentItem);
});