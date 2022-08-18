const homeLoad = () =>{
    const headlineCont = document.createElement('div');
    headlineCont.classList.add('headlineCont');
    const main = document.createElement('div');
    main.classList.add('main');

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