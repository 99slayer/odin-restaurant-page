const content = document.getElementById('content')

const homeLoad = () =>{
    const headlineCont = document.createElement('div');
    const main = document.createElement('div');

    const headline = document.createElement('h1');
    const mainImg = document.createElement('img');
    const mainCopy = document.createElement('p');

    headline.textContent = 'Home';
    mainCopy.textContent = 'Family run since 1932!';
    mainImg.src = '../src/res-img.jpg';

    content.appendChild(headlineCont);
    content.appendChild(main)

    headlineCont.appendChild(headline);
    main.appendChild(mainImg);
    main.appendChild(mainCopy);
};

export {homeLoad};