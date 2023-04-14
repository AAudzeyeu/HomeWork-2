
const createForm = function () {
    const imgUrl = ['https://www.unisender.com/ru/blog/wp-content/uploads/2020/01/8-url.png',
        'https://www.shorturl.at/img/shorturl-icon.png',
        'https://www.unisender.com/ru/blog/wp-content/uploads/2020/01/3-url.png',
        'https://webznam.ru/_bl/16/41608074.jpg',
        'https://lh3.googleusercontent.com/2VWx9PZWWEXS9mQp__-M1pH_RO99sl-axc9NiGE02gHx0lOi_DJ7pcL9lt_ZtMlVNdL3lR8GogMfFGWAWDUdnAzwfzI=w640-h400-e365-rj-sc0x00ffffff'];
    const ul = document.createElement('ul');

    document.body.prepend(ul);
    ul.classList.add('main-ul');

    const createImg = async function () {

        Promise.all(imgUrl)
            .then(imgUrl.forEach(function (element) {
                const li = document.createElement('li');
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                ul.prepend(li);

                img.classList.add('main-img')
                img.style.width = 400 + 'px';
                img.style.height = 250 + 'px';
                img.src = element;

                li.append(figure)
                figure.append(img);
            }))
    }
    createImg()

    const mainImg = document.querySelector('.main-ul');
    const urlImg = document.createElement('a');
    const figcaption = document.createElement('figcaption');

    mainImg.addEventListener('click', function (e) {

        if (e.target.classList.value === 'main-img') {

            urlImg.href = e.target.src
            urlImg.textContent = 'Ссылка на картинку'
            urlImg.target = '_blank'
            e.target.after(figcaption);
            figcaption.append(urlImg);
        };
    });
};

createForm();