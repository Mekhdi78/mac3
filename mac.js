const btns = document.querySelectorAll("button")
const img = document.querySelector('img')
const p = document.querySelector('.text p')
const h1 = document.querySelector('.text h1')
const elements = document.querySelectorAll('#data-text')
const number = document.querySelectorAll('.number')

let current = '$1,999'

const images = {
    'white': './img/white.mac.png',
    'space grey': './img/gray.mac.png'
}

btns.forEach(btn => {
    btn.onclick = () => {
        const key = images[btn.innerText];
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        img.setAttribute('src', key);
        p.innerText = btn.innerText;
    }
    // elements.forEach(elem => {
    //     number.forEach(num => {
    //       elem.onmouseenter = () => {
    //         h1.innerHTML = num + h1.innerHTML;
    //       };
    //     });
    //   });
})


