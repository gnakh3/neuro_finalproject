const arrow = document.querySelector('.gendarrow svg');
arrow.addEventListener('click', () => {
    const nextPage = document.querySelector('.lgb2')

    nextPage.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

const dateElement = document.querySelector('.gtop3');
const now = new Date();

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const day = days[now.getDay()];
const date = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');

dateElement.textContent = `${day} ${date}.${month}`;


const gleft2 = document.querySelector('.gleft2');
const g1left2 = document.querySelector('.g1left2')
const mainPage = document.querySelector('.main');
const hiddenPage = document.querySelector('.g1mainbox');

gleft2.addEventListener('click', () => {
    mainPage.style.display = 'none';
    hiddenPage.style.display = 'block';
});

g1left2.addEventListener('click', () => {
    mainPage.style.display = 'block';
    hiddenPage.style.display = 'none';
});

