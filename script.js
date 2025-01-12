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

document.querySelector('.gleft2 svg').addEventListener('click', () => {
    window.location.href = 'gpage1.html';
});
