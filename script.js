const burger= document.getElementById('hamburger');
const navlist= document.getElementById('navlist');

burger.addEventListener('click', () => {
    navlist.classList.toggle('navlist-active');
})