const pokemon = [
    {
        num: '001',
        name: 'NAME',
        img: 'img/pkmn-img/001.png',
    },
    {
        num: '002',
        name: 'NAME',
        img: 'img/pkmn-img/002.png'
    },
    {
        num: '003',
        
    }
];

const pkmnNum = document.getElementsByClassName("pkmn-num")[0];
const pkmnName = document.getElementsByClassName("pkmn-name")[0];
const pkmnImg = document.getElementsByClassName("pkmn-img")[0];
const prevBtn = document.getElementsByClassName("chevron prev")[0];
const nextBtn = document.getElementsByClassName("chevron next")[0];


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    const item = pokemon[currentItem];
    pkmnNum.textContent = item.num;
    pkmnName.textContent = item.name;
    pkmnImg.src = item.img;
});

function showData(pkmn){
    const item = pokemon[pkmn];
    pkmnNum.textContent = item.num;
    pkmnName.textContent = item.name;
    pkmnImg.src = item.img;
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