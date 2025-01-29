const arrow = document.querySelector('.home-content-h1-button-icon-box');
const arrow1 = document.querySelector('.home-drop-down-button');
const nextPage = document.querySelector('.about-box');
const html = document.documentElement;
const body = document.body;

arrow.addEventListener('click', (event) => {
    event.preventDefault();
    nextPage.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    arrow1.addEventListener('click', (event) => {
        event.preventDefault();
        nextPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        //     setTimeout(() => {
        //         html.style.overflow = 'auto';  
        //         body.style.overflow = 'auto';  
        //     }, 800);
        // });

        // window.addEventListener('scroll', () => {
        //     const scrollTop = window.scrollY;

        //     if (scrollTop === 0) {
        //         html.style.overflow = 'hidden';
        //         body.style.overflow = 'hidden';
        //     }
    })
});

arrow1.addEventListener('click', (event) => {
    event.preventDefault();
    nextPage.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
})


const dateElement = document.querySelector('.home-content-top-nav-coord-info');
const now = new Date();

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const day = days[now.getDay()];
const date = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');

dateElement.textContent = `${day} ${date}.${month}`;


let isPageVisible = false;

document.getElementById('fadeInButtonSVG').addEventListener('click', function () {
    console.log('clicked');
    const hiddenPage = document.getElementById('hiddenPage');
    const sideBar = document.querySelector('.home-left-info-box');
    const mainBox = document.querySelector('.home-box');
    const home-top - nav - action - box = document.querySelector('.home-top-nav-action-box')

    if (!isPageVisible) {
        hiddenPage.style.transition = 'transform 1s ease, opacity 1s ease';
        hiddenPage.style.opacity = 1;
        hiddenPage.style.transform = 'translateX(0)';

        home - top - nav - action - box.style.backgroundColor = 'black';
        sideBar.style.backgroundColor = 'black';
        mainBox.style.zIndex = '0';

        isPageVisible = true;
    } else {
        hiddenPage.style.opacity = 0;
        hiddenPage.style.transform = 'translateX(-100%)';

        setTimeout(() => {
            home - top - nav - action - box.style.backgroundColor = '';
            sideBar.style.backgroundColor = '';
            mainBox.style.zIndex = '';
        }, 500);

        isPageVisible = false;
    }
});

document.getElementById('fadeInButtonSVGy').addEventListener('click', function () {
    console.log('clicked');
    const hiddenPage = document.getElementById('hiddenPage');
    const mainBox = document.querySelector('.home-box');
    const home-top - nav - action - box = document.querySelector('.home-top-nav-action-box')
    const sideBar = document.querySelector('.home-left-info-box');

    if (!isPageVisible) {
        hiddenPage.style.transition = 'transform 1s ease, opacity 1s ease';
        hiddenPage.style.opacity = 1;
        hiddenPage.style.transform = 'translateY(0)';

        home - top - nav - action - box.style.backgroundColor = 'black';
        sideBar.style.backgroundColor = 'black';
        sideBar.style.backgroundImage = 'none';
        mainBox.style.zIndex = '0';

        isPageVisible = true;
    } else {
        hiddenPage.style.opacity = 0;
        hiddenPage.style.transform = 'translateY(-100%)';

        setTimeout(() => {
            home - top - nav - action - box.style.backgroundColor = '';
            sideBar.style.backgroundColor = '';
            mainBox.style.zIndex = '';
            sideBar.style.backgroundImage = '';
        }, 500);

        isPageVisible = false;
    }
});


document.querySelector('#forhome').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.home-box').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('#forworks').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.about-box').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('#forcompany').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.projects-box').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('#forthoughts').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.b4').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('#forcontact').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.b5').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

const transitionButton = document.querySelector('#fadeInButtonSVG');

transitionButton.addEventListener('click', () => {
    transitionButton.classList.toggle('rotated');
});


