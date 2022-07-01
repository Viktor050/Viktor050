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




const swiper = new Swiper('.swiper', {
	// navigation: {
	// 	prevEl: '.swiper-button-prev',
	// 	nextEl: '.swiper-button-next',
	// },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
});
