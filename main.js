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
    title: 'Table Reservation',
    img: './images/book table.png',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'Ruby on Rails', 'React'],
    des: [
      'Restaurant Table Reservation is an app that allows user to register, add a table, reserve a table and delete the table or the reservation. The backend is built using Ruby On Rails and communicates with the frontend of the app to provide a seamless user experience.'
    ],
    git: ['https://github.com/harshitajain06/Book-reservation-Front_End', 'See Github'],
    demo: ['https://book-reservation-h17l.onrender.com/', 'See Demo'],
  },
  {
    title: 'Fashion Conference',
    img: './images/fashion.png',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    des: [
      'This is a Fashion World Conference website in first Capstone project during Microverse Full Stack developer course. I used HTML, CSS and JavaScript in this project.'
    ],
    git: ['https://github.com/harshitajain06/Capstone-1.git', 'See Github'],
    demo: ['https://harshitajain06.github.io/Capstone-1/', 'See Demo'],
  },
  {
    title: 'Math Magicians',
    img: './images/math.png',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'Tailwind', 'React'],
    des: [
      'It is a Calculator App made with React.'
    ],
    git: ['https://github.com/harshitajain06/Math_Magicians', 'See Github'],
    demo: ['https://math-magician-nttj.onrender.com/', 'See Demo'],
  },
  {
    title: 'Meals Menu',
    img: './images/meals menu.png',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'Tailwind', 'React'],
    des: [
      'Meals-Menu is a web app that showcases the the meals available in a restaurant with great number of details about those meals including the categories, Ingridients and the recipes for them.'
    ],
    git: ['https://github.com/harshitajain06/Meals-Menu', 'See Github'],
    demo: ['https://harshitajain06.github.io/Meals-Menu/dist/', 'See Demo'],
  },
  {
    title: 'Leaderboard',
    img: './images/leaderboard.png',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
    des: [
      'Leaderboard List is a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules.'
    ],
    git: ['https://github.com/harshitajain06/Leaderboard', 'See Github'],
    demo: ['https://harshitajain06.github.io/Leaderboard/dist/', 'See Demo'],
  },
  {
    title: 'Space Travelers Hub',
    img: './images/space.png',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'Tailwind', 'React'],
    des: [
      'Space Travelers Hub is a React project to set up the environment and tools needed to develop a React application, using webpack and ES6 features, notably modules.'
    ],
    git: ['https://github.com/harshitajain06/Space-Travelers-Hub', 'See Github'],
    demo: ['https://spacemission-65jz.onrender.com/', 'See Demo'],
  },
];

const body = document.getElementById('popup');
// const section = document.createElement('section');
// body.appendChild(section);
// section.innerHTML = ``;

const open = document.querySelectorAll('.see-project');
open.forEach((item) => {
  item.addEventListener('click', (e) => {
    const popup = document.createElement('section1');
    const store = e.currentTarget.dataset;

    const st = store.id;
    let i = 0;
    const st1 = st.charAt(3);
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
        <a href="${projects[i].git[1]}"><button class="button2"><span>${projects[i].git[1]}</span><img id="git" src="./images/ic_github_white (1).svg" alt="gitlink"></button></a>
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
    show.forEach((i) => i.classList.toggle('active'));

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
