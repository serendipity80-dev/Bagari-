import data from './data.js';

// adr-schein section
const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = 'none'
  prevBtn.style.display = 'none'
}
// if length is 2, add copies of slides
let people = [...data]
if (data.length === 2) {
  people = [...data, ...data]
}
container.innerHTML = people
  .map((person, slideIndex) => {
    const { img,text } = person
    let position = 'next'
    if (slideIndex === 0) {
      position = 'active'
    }
    if (slideIndex === people.length - 1) {
      position = 'last'
    }
    if (data.length <= 1) {
      position = 'active'
    }
    return `<article class="slide ${position}">
  <img src=${img} class="img" />
  <h4>${text}</h4>
 </article>`
  })
  .join('')

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling
  if (!next) {
    next = container.firstElementChild
  }
  active.classList.remove('active')
  last.classList.remove('last')
  next.classList.remove('next')

  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling
    if (!next) {
      next = container.lastElementChild
    }
    next.classList.remove('next')
    next.classList.add('last')
    return
  }
  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}
nextBtn.addEventListener('click', () => {
  startSlider()
})
prevBtn.addEventListener('click', () => {
  startSlider('prev')
})

// navigation scroll bar effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')

  header.classList.toggle('sticky', window.scrollY > 0)
});

// Responsive Navigation Menu Toggle

const menuBtn = document.querySelector('.nav-menu-btn')
const closeBtn = document.querySelector('.nav-close-btn')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener("click", () => {

navigation.classList.add("active")
})

closeBtn.addEventListener("click", () => {

navigation.classList.remove("active")
})
