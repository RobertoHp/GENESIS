const iconMenu = document.querySelector('#icon-bar');
const openMenu = document.querySelector('#nav__list');
const navItem = document.querySelectorAll('.nav__item');
const subItem = document.querySelectorAll('.nav__sub-item');
let heroimg = document.getElementById('hero-image');
let diccionario = ['cortes', 'manicure', 'pedicure', 'maquillaje', 'peinados', 'mechas', 'planchados', 'tintes'];
let mw = document.querySelector('#machine-word');
let i = 0; //Varibale para cambiar las palabras del hero escritas
let chgImg = 1; //Variable para cambiar la imagen del hero
const cont = document.querySelectorAll('.accountant__num');
var ic = [0, 0, 0, 1];
const slider = document.querySelector('#slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let ix = 0;
const obj = document.querySelectorAll('.animacion');
const contanm = document.querySelector('.contanm');
const header = document.querySelector('.header');

const barMedia = document.querySelector('#barMediaShare');
const buttonMedia = document.querySelectorAll('.buttonMediaShare');

function HiddeShowBarMenu() {
    barMedia.classList.toggle('show');
}

buttonMedia[0].onclick = HiddeShowBarMenu;
buttonMedia[5].onclick = HiddeShowBarMenu;

function hiddeMenu() {
    iconMenu.classList.remove('mostrar');
    openMenu.classList.remove('sho');
}


iconMenu.onclick = () => {
    iconMenu.classList.toggle('mostrar');
    openMenu.classList.toggle('sho');
}


navItem[1].onclick = () => {
    if (window.screen.width <= 749) {
        navItem[1].classList.toggle('show');
        navItem[2].classList.remove('show');
        navItem[4].classList.remove('show');
    }
};

navItem[2].onclick = () => {
    if (window.screen.width <= 749) {
        navItem[2].classList.toggle('show');
        navItem[1].classList.remove('show');
        navItem[4].classList.remove('show');
    }
};

navItem[4].onclick = () => {
    if (window.screen.width <= 749) {
        navItem[4].classList.toggle('show');
        navItem[1].classList.remove('show');
        navItem[2].classList.remove('show');
    }
};

navItem[5].onclick = hiddeMenu;
navItem[6].onclick = hiddeMenu;

subItem[0].onclick = hiddeMenu;
subItem[1].onclick = hiddeMenu;
subItem[2].onclick = hiddeMenu;
subItem[3].onclick = hiddeMenu;
subItem[4].onclick = hiddeMenu;


window.onresize = () => {
    hiddeMenu();
    if (window.screen.width >= 750) {
        navItem[1].classList.remove('show');
    }
};





function writeWord() {
    if (i <= (diccionario.length - 1)) {
        mw.innerHTML = diccionario[i] + "." + "<span id=\"cursor\">&#160;</span>";
        document.querySelector('#cursor').style.animation = "maquina 1.5s infinite alternate steps(" + (diccionario[i].length + 1) + ")";
        i = (i == (diccionario.length - 1)) ? 0 : i += 1;
    }
}

function chgImgHero() {
    if (chgImg <= 4) {
        heroimg.style.backgroundImage = 'url(source/img/styllist_' + chgImg + '.webp)';
        chgImg = (chgImg == 4) ? 1 : chgImg += 1;
    }
}



function contador(nm, ind, inc, lm) {
    var t = setInterval(conta, 90);

    function conta() {
        cont[nm].innerHTML = '+' + ic[ind];
        if (ic[ind] == lm) clearInterval(t);
        ic[ind] += inc;
    }
}

writeWord();
setInterval(writeWord, 3000);
chgImgHero();
setInterval(chgImgHero, 6000);

next.onclick = () => {
    ix = (ix < 300) ? ix += 100 : 0;
    slider.style.transform = 'translateX(-' + ix + '%)';
};
prev.onclick = () => {
    ix = (ix > 0) ? ix -= 100 : 300;
    slider.style.transform = 'translateX(-' + ix + '%)';
};


window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    for (let index = 0; index < obj.length; index++) {
        let scrollA = obj[index].offsetTop;
        if (scrollA - (window.innerHeight * .90) <= scrollTop) {
            obj[index].classList.add('anmarriba');
        }
    }

    // if (scrollTop >= 80) {
    //     header.style.background = '#000';
    //     openMenu.style.background = '#000';
    // } else {
    //     header.style.background = '#e6f2f8';
    //     openMenu.style.background = '#e6f2f8';
    // }
};

contador(0, 0, 2, 20);
contador(1, 1, 3, 30);
contador(2, 2, 25, 150);
contador(3, 3, 1, 3);