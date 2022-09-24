/////////////PRISE TAB///////////////

var carHeader = document.querySelector('.car__header');
var carPrice = document.querySelector('.car__price');

var buttonCar = document.querySelector('.car__service');
var buttonPrice = document.querySelector('.car__price-button');

buttonCar.addEventListener('click', () =>
{
    carHeader.classList.remove('active');
    carPrice.classList.add('active');
});

buttonPrice.addEventListener('click', () =>
{
    carHeader.classList.add('active');
    carPrice.classList.remove('active');
})

///////GAMBURGER///////
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function ()
{
    menuBtn.classList.toggle('activebtn');
    menu.classList.toggle('activebur');
})

///////VANILLA-TAB ONE/////////
const next = document.querySelector('.right'),
    prev = document.querySelector('.left'),
    slides = document.querySelectorAll('.car__mainauto');

let index = 0;


const activeSlide = n =>
{
    for (slide of slides) {
        slide.classList.remove('activeauto');
    }
    slides[n].classList.add('activeauto');
}


const prepareCurrentSlide = ind =>
{
    activeSlide(index);
}

const nextSlide = () =>
{
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}


const prevSlide = () =>
{
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

///////VANILLA-TAB TWO/////////
const next2 = document.querySelector('.righttwo'),
    prev2 = document.querySelector('.lefttwo'),
    slides2 = document.querySelectorAll('.car__img');

let index2 = 0;


const activeSlide2 = k =>
{
    for (slide of slides2) {
        slide.classList.remove('activeslid');
    }
    slides2[k].classList.add('activeslid');
}


const prepareCurrentSlide2 = ind =>
{
    activeSlide2(index2);
}

const nextSlide2 = () =>
{
    if (index2 == slides2.length - 1) {
        index2 = 0;
        prepareCurrentSlide2(index2);
    } else {
        index2++;
        prepareCurrentSlide2(index2);
    }
}


const prevSlide2 = () =>
{
    if (index2 == 0) {
        index2 = slides2.length - 1;
        prepareCurrentSlide2(index2);
    } else {
        index2--;
        prepareCurrentSlide2(index2);
    }
}



next2.addEventListener('click', nextSlide2);
prev2.addEventListener('click', prevSlide2);

///////VANILLA-TAB TREE/////////
const next3 = document.querySelector('.righttwo1'),
    prev3 = document.querySelector('.lefttwo1'),
    slides3 = document.querySelectorAll('.car__imgtwo');

let index3 = 0;


const activeSlide3 = j =>
{
    for (slide of slides3) {
        slide.classList.remove('activeimg');
    }
    slides3[j].classList.add('activeimg');
}


const prepareCurrentSlide3 = ind =>
{
    activeSlide3(index3);
}

const nextSlide3 = () =>
{
    if (index3 == slides3.length - 1) {
        index3 = 0;
        prepareCurrentSlide3(index3);
    } else {
        index3++;
        prepareCurrentSlide3(index3);
    }
}


const prevSlide3 = () =>
{
    if (index3 == 0) {
        index3 = slides3.length - 1;
        prepareCurrentSlide3(index3);
    } else {
        index3--;
        prepareCurrentSlide3(index3);
    }
}



next3.addEventListener('click', nextSlide3);
prev3.addEventListener('click', prevSlide3);