

let mainImage = document.getElementById('mainImage');
    let img1 = document.getElementById('1');
    let img2 = document.getElementById('2');
    let img3 = document.getElementById('3');
    let img4 = document.getElementById('4');

    img1.addEventListener('mouseover', () => {
        mainImage.innerHTML = `<img class="main" src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/h/m/w/m-jc22-rn-3-4th-black-teddy-jump-cuts-original-imaghryhyhvgsgb9.jpeg?q=70" alt="">`;
    });

    img2.addEventListener('mouseover', () => {
        mainImage.innerHTML = `<iframe width="400" height="500" src="https://www.youtube.com/embed/Ryo_wHHaxnc" frameborder="0" allowfullscreen></iframe>`;
    });

    img3.addEventListener('mouseover', () => {
        mainImage.innerHTML = `<img class="main" src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/f/7/c/m-jc22-rn-3-4th-black-teddy-jump-cuts-original-imaghryhyrgymhz3.jpeg?q=70" alt="">`;
    });

    img4.addEventListener('mouseover', () => {
        mainImage.innerHTML = `<img class="main" src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/c/8/m-jc22-rn-3-4th-black-teddy-jump-cuts-original-imaghryhsgkznwq9.jpeg?q=70" alt="">`;
    });