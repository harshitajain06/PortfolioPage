const hamMenu = document.getElementById("hamMenuImg");
const closeMenu = document.getElementById("closeMenuImg");
const respMenu = document.getElementById("responsiveMenu");


hamMenu.addEventListener('click', ()=> {
    respMenu.style.display = "flex";
});
closeMenu.addEventListener('click', ()=> {
    respMenu.style.display = "none";
});
respMenu.addEventListener('click', ()=> {
    respMenu.style.display = "none";
});




