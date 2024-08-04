const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".flexboxUl");
const closeBtn = document.querySelector(".close-btn");


hamburgerBtn.addEventListener('click', () => {
  navMenu.style.display = 'flex';
  closeBtn.style.display = 'block';
  hamburgerBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
  closeBtn.style.display = 'none';
  hamburgerBtn.style.display = 'block';
})