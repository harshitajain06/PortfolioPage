const hamMenu = document.getElementById('hamMenuImg');
const closeMenu = document.getElementById('closeMenuImg');
const respMenu = document.getElementById('responsiveMenu');

hamMenu.addEventListener('click', () => {
  respMenu.style.display = 'flex';
  document.querySelector('body').style.position = 'fixed';
});

closeMenu.addEventListener('click', () => {
  respMenu.style.display = 'none';
  document.querySelector('body').style.position = null;
});

respMenu.addEventListener('click', () => {
  respMenu.style.display = 'none';
});
