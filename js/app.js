var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
//=================
//testWebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
//=================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}
let unlock = true;

//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
const positionMain = document.querySelector('#main').offsetTop,
	heightMain = document.querySelector('#main').offsetHeight,
	positionWicked = document.querySelector('#wicked').offsetTop,
	heighWicked = document.querySelector('#wicked').offsetHeight,
	positionPen = document.querySelector('#pen').offsetTop,
	heightPen = document.querySelector('#pen').offsetHeight,
	positioExperience = document.querySelector('#experience').offsetTop,
	heightExperience = document.querySelector('#experience').offsetHeight,
	positionPhotogr = document.querySelector('#photogr').offsetTop,
	heightPhotogr = document.querySelector('#photogr').offsetHeight,
	positionPen2 = document.querySelector('#pen-2').offsetTop,
	heightPen2 = document.querySelector('#pen-2').offsetHeight;
function addClass(k) {
	let nameLinks = document.querySelectorAll(".menu__link");
	for (let i = 0; i < nameLinks.length; i++) {
		let nameLink = nameLinks[i];
		nameLink.classList.remove('_active');
	}
	let nameLink1 = nameLinks[k];
	nameLink1.classList.add('_active');
}
function removeClass(k) {
	let nameLink = document.querySelectorAll(".menu__link");
	nameLink[k].classList.remove('_active');
}
window.addEventListener('scroll', function () {
	let scroll = document.documentElement.scrollTop;
	let topOffset = document.querySelector('.header').offsetHeight;

	if (scroll > positionMain - topOffset * 2 && scroll < (positionMain + heightMain)) addClass(0);
	else removeClass(0);
	if (scroll > positionWicked - topOffset * 2 && scroll < (positionWicked + heighWicked)) addClass(1);
	else removeClass(1);
	if (scroll > positionPen - topOffset * 2 && scroll < (positionPen + heightPen)) addClass(2);
	else removeClass(2);
	if (scroll > positioExperience - topOffset * 2 && scroll < (positioExperience + heightExperience)) addClass(3);
	else removeClass(3);
	if (scroll > positionPhotogr - topOffset * 2 && scroll < (positionPhotogr + heightPhotogr)) addClass(4);
	else removeClass(4);
	if (scroll > positionPen2 - topOffset * 2 && scroll < (positionPen2 + heightPen2)) addClass(5);
	else removeClass(5);
});
//=================
let headerSearch = document.querySelectorAll('.header');
for (let i = 0; i < headerSearch.length; i++) {
	let header = headerSearch[i];
	let yakors = header.querySelectorAll(".menu__link");
	for (let i = 0; i < yakors.length; i++) {
		let yakor = yakors[i];
		yakor.addEventListener("click", function (e) {
			for (let i = 0; i < yakors.length; i++) {
				let yakor = yakors[i];
				yakor.classList.remove('_active');
			}
			yakor.classList.add('_active');
			e.preventDefault();

			const href = this.getAttribute('href').substring(1);
			const scrollTarget = document.getElementById(href);

			const topOffset = header.offsetHeight; //высота header или 0

			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			})
		});
	}
}
function headerDark() {
	const main = document.querySelector("#main");
	window.addEventListener('scroll', function () {
		let scrollTop = document.documentElement.scrollTop;

		if (scrollTop >= (main.clientHeight)) {
			header.classList.add("dark");
		} else {
			header.classList.remove("dark");
		}
	});
}
headerDark();

new WOW().init();

