'use strict'

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuLinks = document.querySelectorAll('.catalogue-menu__link');
	if (menuLinks.length > 0) {
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function(e) {
				menuLink.parentElement.classList.toggle('_active');
				e.preventDefault();
			});
			
		}
	}
}	else	{
	document.body.classList.add('_pc');
}

const menuBurger = document.querySelector('.menu-burger');

if (isMobile.any) {
	menuBurger.addEventListener('click', function() {
		menuBurger.classList.toggle('_active');
	});
}
// ==================================================

const parentOriginal = document.querySelector('.parent-original');
const parent = document.querySelector('.header-main-page-body');
const item = document.querySelector('.header-main-page-content__img');

window.addEventListener('resize', function (event) {
	const viewPort_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewPort_width <= 767) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[4]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parentOriginal.insertBefore(item, parentOriginal.children[4]);
			item.classList.remove('done');
		}
	}
});






// =================================================
const swiper = new Swiper('.swiper', {
	// navigation: {
	// 	prevEl: '.swiper-button-prev',
	// 	nextEl: '.swiper-button-next',
	// },
	// autoplay: {
		// delay: 5000,
		// disableOnInteraction: false,

		// pauseOnMouseEnter: true, 
		/*пауза при наведенні курсора*/
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	// mousewheel: {
	// 	sensitivity: 1,
	// }, 
	/*прокрутка мишкою(тачскріном). Тачскріном не можна проскролити сторінку бо блок займає всю ширину*/
	autoHeight: true,
});
