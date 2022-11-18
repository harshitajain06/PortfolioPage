const hide = document.querySelectorAll('section');
document.querySelector('.see-project').addEventListener('click', () => {
  hide.forEach((i) => i.classList.toggle('active'));
});

const hamMenu = document.getElementById('hamMenuImg');
const closeMenu = document.getElementById('closeMenuImg');
const respMenu = document.getElementById('responsiveMenu');

hamMenu.addEventListener('click', () => {
  respMenu.style.display = 'flex';
});
closeMenu.addEventListener('click', () => {
  respMenu.style.display = 'none';
});
respMenu.addEventListener('click', () => {
  respMenu.style.display = 'none';
});

// **************Popup*******************
const projects = [
  {
    title: 'Project name goes here',
    img: './images/Group 105.svg',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.',
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'Project name goes here',
    img: './images/Rectangle 21 (1).svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.',
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'Project name goes here',
    img: './images/Rectangle 21 (5).svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.',
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'Project name goes here',
    img: './images/Rectangle 21 (2).svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.',
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'Project name goes here',
    img: './images/Rectangle 26.svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.',
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'Project name goes here',
    img: './images/Rectangle 21 (3).svg',
    imgAlt: '#',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.',
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
];

const body = document.getElementById('popup');
// const section = document.createElement('section');
// body.appendChild(section);
// section.innerHTML = ``;

const open = document.querySelectorAll('.see-project');
open.forEach((item) => {
  item.addEventListener('click', (e) => {
    const popup = document.createElement('section');
    const store = e.currentTarget.dataset;
    const str = store.id;
    let i = 0;
    const st1 = str.charAt(3);
    i = st1;

    popup.innerHTML = `
    <div class="desk-popup">
    <h2>${projects[i].title}</h2>
    <ul>
        <li>${projects[i].tech[0]}</li>
        <li>${projects[i].tech[1]}</li>
        <li>${projects[i].tech[2]}</li>
    </ul>
    <img class="imgPop" src="${projects[i].img}" alt="${projects.imgAlt}">
    <p class="p1">
        ${projects[i].des[0]}
    </p>
    
    <div class="btn-div">
        <a href="${projects[i].demo[0]}"><button class="button1"><span>${projects[i].demo[1]}</span><img src="./images/ic_link.svg" alt="openlink"></button></a>
        <a href="${projects[i].git[1]}"><button class="button2"><span>${projects[i].git[1]}</span><img src="./images/ic_github_white.svg" alt="gitlink"></button></a>
    </div>
    <div class="btn-nxt-rev">
        <a href="${projects[i].demo[0]}"><button class="button3"><img src="./images/Union (2).svg" alt="Previous Projects"><span>Previous Projects</span></button></a>
        <a href="${projects[i].git[1]}"><button class="button4"><span>Next Project</span><img src="./images/Union (1).svg" alt="next Projects"></button></a>
    </div>
    <div id="popupBtnCross" class="popupBtncross"><img src="./images/Union.svg" alt="cross"></div>
 </div>
    `;
    body.appendChild(popup);

    const show = document.querySelectorAll('section');
    document.querySelector('#popupBtnCross').addEventListener('click', () => {
      show.forEach((i) => i.classList.toggle('show'));
    });

    const close = document.getElementById('popupBtnCross');
    close.addEventListener('click', () => {
      body.removeChild(popup);
    });
  });
});

const form = document.getElementById('form');
const input = document.getElementById('email');
const errorMsg = document.getElementById('errMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value.trim();
  const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regex.test(email)) {
    errorMsg.textContent = 'Email Should Be In Lower Case Only';
  } else {
    form.submit();
  }
});
