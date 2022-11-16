const hamMenu = document.getElementById('hamMenuImg');
const closeMenu = document.getElementById('closeMenuImg');
const respMenu = document.getElementById('responsiveMenu');

hamMenu.addEventListener('click', () => {
  respMenu.style.display = 'flex';
  document.querySelector('body').style.position = 'fixed';
});

function toggle() {
    respMenu.style.display = "flex";
}

function close1() {
    respMenu.style.display = "none";
}

hamMenu.addEventListener('click', toggle);
closeMenu.addEventListener('click', close1);
respMenu.addEventListener('click', close1);



