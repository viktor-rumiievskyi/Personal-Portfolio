const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav_link')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

// Skills
const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close'
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})
// Skills

// Qualification
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach((tab) => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})
// Qualification

// Services
const modalViews = document.querySelectorAll('.services_modal'),
modalBtns = document.querySelectorAll('.services_button'),
modalClose = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalClose.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal')
		})
	})
})
// Services

// Portfolio
let swiper = new Swiper('.portfolio_container', {
	cssMode: true,
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
// Portfolio

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)