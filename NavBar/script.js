const open = document.querySelector('.open');
const close = document.querySelector('.close');
const contain = document.querySelector('.container');

open.addEventListener('click', function () {
    contain.classList.add('open')
})

close.addEventListener('click', function () {
    contain.classList.remove('open')
})