'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const operationTabs = document.querySelector('.operations__tab-container');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Scroll to element has id when click on nav link
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link'))
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
});

// Learn more button click
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const section1 = document.querySelector('#section--1');
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Operation tab function
const removeTabActive = () => {
  document.querySelectorAll('.operations__tab').forEach(content => {
    content.classList.remove('operations__tab--active');
  });
};
const removeContentActive = () =>
  document.querySelectorAll('.operations__content').forEach(content => {
    content.classList.remove('operations__content--active');
  });
const addTabActive = e => {
  e.target.classList.add('operations__tab--active');
};
const addContentActive = tab => {
  document
    .querySelector(`.operations__content--${tab}`)
    .classList.add('operations__content--active');
};
operationTabs.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('operations__tab')) {
    removeContentActive();
    removeTabActive();
    const tab = e.target.dataset.tab;
    addTabActive(e);
    addContentActive(tab);
  }
});
//set animation for nav link
//passing agument to a function
const navLinks = document.querySelector('.nav__links');

const mouseHandler = function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    console.log(siblings);
    console.log(this);
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navLinks.addEventListener('mouseover', mouseHandler.bind(0.5));
navLinks.addEventListener('mouseout', mouseHandler.bind(1));

//Create a sticky nav
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  console.log(initialCoords.top);
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
