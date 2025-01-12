document.querySelector('.left2 svg').addEventListener('click', () => {
    window.location.href = 'index.html';
});

const dateElement = document.querySelector('.top3');
const now = new Date();

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const day = days[now.getDay()];
const date = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');

dateElement.textContent = `${day} ${date}.${month}`;