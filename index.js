let colornavItems = document.querySelectorAll('li')
let colorElement = document.querySelector('.color')
let imageElement = document.querySelector('.img1')

let colors = [
    {
        name: ' Purple',
        imgPath: './img/purple.jfif'
    },
    {
        name: ' Gold',
        imgPath: './img/gold.jfif'
    },
    {
        name: ' White',
        imgPath: './img/white.jfif'
    },
    {
        name: ' Black',
        imgPath: './img/black.jfif'
    }
];

let defaultSelected = colors[0];

colornavItems.forEach((item, index) => {
    let color = colors[index];

    item.onmouseenter = () => {
        colorElement.innerHTML = `Color - ${color.name}`;
    }

    item.onmouseleave = () => {
        colorElement.innerHTML = `Color - ${defaultSelected.name}`;
    }

    item.onclick = () => {
        imageElement.src = color.imgPath;
        colorElement.innerText = `Color - ${color.name}`;
        defaultSelected = color;
    }
});


