const navToggle = document.querySelector('.nav-toggle');
const menuBar = document.querySelector('.nav-bar-2');

navToggle.addEventListener('click', () => {
	menuBar.classList.toggle('nav-bar-2-active');
})