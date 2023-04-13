
const createForm = function () {
    const imgUrl = ['https://www.unisender.com/ru/blog/wp-content/uploads/2020/01/8-url.png',
        'https://www.shorturl.at/img/shorturl-icon.png',
        'https://www.unisender.com/ru/blog/wp-content/uploads/2020/01/3-url.png',
        'https://webznam.ru/_bl/16/41608074.jpg',
        'https://lh3.googleusercontent.com/2VWx9PZWWEXS9mQp__-M1pH_RO99sl-axc9NiGE02gHx0lOi_DJ7pcL9lt_ZtMlVNdL3lR8GogMfFGWAWDUdnAzwfzI=w640-h400-e365-rj-sc0x00ffffff'];
    const ul = document.createElement('ul');
    
    document.body.prepend(ul);
    ul.classList.add('main-ul')

    const createImgForm = async function () {
        await imgUrl.forEach(function (element) {
            const li = document.createElement('li');
            ul.prepend(li);
            const img = document.createElement('img');
            img.classList.add('main-img')
            img.style.width = 400 + 'px';
            img.style.height = 250 + 'px';
            img.src = element;
            li.append(img);
        })
    }
    createImgForm();

    const mainImg = document.querySelector('.main-ul');
    console.log(mainImg);
    mainImg.addEventListener('click', function(e) {
        console.log(e.target);
        console.log(e.target.src);
        console.log(e.target.classList.value);
        if (e.target.classList.value === 'main-img') {
            const urlImg = document.createElement('a');
            // a. = e.target.src;
        }
    })
}

createForm();