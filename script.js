const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const clickBtn = document.getElementsByClassName('.social-icons')

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

clickBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'purple';
})