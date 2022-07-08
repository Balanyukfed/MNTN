let wrapper = document.querySelector('.wrapper');

window.onload = function(){ 
	let figur = document.querySelectorAll('.parallax');

	let arr = [20,30,100];
//Скорость анимаций
const speed = 0.05;

//Определение позиции и переменные для перевода в проценты значений
let positionX = 0;
let coordProcentX = 0;

//Функция параллакса
function setMouseParallax(){
	const distX = coordProcentX - positionX;

	positionX = positionX + (distX * speed);

//Перемещение массива фигур с учетом массива коэффициентов
for (let i = 0; i < figur.length; i++) {
	figur[i].style.cssText = `Transform: translateX(${positionX/arr[i]}%) scaleX(1.15)`;
}
requestAnimationFrame(setMouseParallax);
}
setMouseParallax();

//Проверка события перемещения мыши
wrapper.addEventListener('mousemove', function(e){
	const parallaxWidth = wrapper.offsetWidth;

	const coordX = e.pageX - parallaxWidth / 2;
	coordProcentX = coordX / parallaxWidth * 100;
});
}
//=================================================================
let blockForScroll = document.querySelectorAll('.step_js');

window.addEventListener('scroll', trackScroll);

//Рсчет расстояния элемента от верха и определение длины скролла для запуска анимации
function offset(el) {
	let rect = el.getBoundingClientRect(),
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let topDist = {top:rect.top + scrollTop - (window.innerHeight * 0.6)}
	return (topDist.top);
}

function trackScroll() {
	for (let i = 0; i < blockForScroll.length; i++) {
		
		let scrolled = window.pageYOffset;

		let steps = document.querySelectorAll('.steps>li');
		let offsetScroll = offset(blockForScroll[i]);
		let slideBar = document.querySelector('.slide_bar');

					slideBar.style.transform = `translateY(${((scrolled*100)/(document.body.scrollHeight - window.innerHeight))*3}%)`;

		if (scrolled >offset(blockForScroll[0])) {
			for (j = 0; j<steps.length; j++){
			steps[j].style.opacity = '0.7';
		}
			steps[0].style.opacity = '1';
		}
		if (scrolled > offset(blockForScroll[1])) {
			for (j = 0; j<steps.length; j++){
			steps[j].style.opacity = '0.7';
		}
			steps[1].style.opacity = '1';
		}
		if (scrolled > offset(blockForScroll[2])) {
			for (j = 0; j<steps.length; j++){
			steps[j].style.opacity = '0.7';
		}
			steps[2].style.opacity = '1';
		}
		if (scrolled > offset(blockForScroll[3])) {
			for (j = 0; j<steps.length; j++){
			steps[j].style.opacity = '0.7';
		}
			steps[3].style.opacity = '1';
		}
	}
}
//==============================================================================
let scrollDown = document.querySelector('.header_button');
scrollDown.addEventListener('click', scrollDownFunc);

function scrollDownFunc(){
	 	window.scrollTo({
 		top: offset(blockForScroll[1])+window.innerHeight-450,
 		left: 0,
 		behavior : "smooth"
 	});
 }