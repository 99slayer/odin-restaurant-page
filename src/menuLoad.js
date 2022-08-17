const content = document.getElementById('content');

const menuLoad = () =>{
    const headlineCont = document.createElement('div');
    const main = document.createElement('div');

    const headline = document.createElement('h1');
    const menuItem1Cont = document.createElement('div');
    const menuItem2Cont = document.createElement('div');
    const menuItem3Cont = document.createElement('div');
    const menuItem4Cont = document.createElement('div');
    const menuItem5Cont = document.createElement('div');

    const menuItem1Img = document.createElement('img');
    const menuItem1Copy = document.createElement('p');
    const menuItem2Img = document.createElement('img');
    const menuItem2Copy = document.createElement('p');
    const menuItem3Img = document.createElement('img');
    const menuItem3Copy = document.createElement('p');
    const menuItem4Img = document.createElement('Img');
    const menuItem4Copy = document.createElement('p');
    const menuItem5Img = document.createElement('img');
    const menuItem5Copy = document.createElement('p');

    headline.textContent = 'Menu';

    menuItem1Img.src = 'https://live.staticflickr.com/3839/14974952510_673ed533af_b.jpg'
    menuItem1Copy.textContent = 'Spaghetti';

    menuItem2Img.src = 'https://live.staticflickr.com/160/416698521_0bef9b9cd0_b.jpg';
    menuItem2Copy.textContent = 'Hamburger';

    menuItem3Img.src = 'https://curiocity.com/wp-content/uploads/2021/03/photo-1574071318508-1cdbab80d002-1.jpg';
    menuItem3Copy.textContent = 'Pizza';

    menuItem4Img.src = 'https://www.avenuecalgary.com/wp-content/uploads/2018/01/AC_SaladsThinkstock.gif';
    menuItem4Copy.textContent = 'Big Salad';

    menuItem5Img.src = 'https://live.staticflickr.com/3389/3302576092_92461e14f2_b.jpg';
    menuItem5Copy.textContent = 'Breadsticks';

    content.append(headlineCont,main);
    headlineCont.appendChild(headline);
    main.append(menuItem1Cont,menuItem2Cont,menuItem3Cont,menuItem4Cont,menuItem5Cont);

    menuItem1Cont.append(menuItem1Img,menuItem1Copy);
    menuItem2Cont.append(menuItem2Img,menuItem2Copy);
    menuItem3Cont.append(menuItem3Img,menuItem3Copy);
    menuItem4Cont.append(menuItem4Img,menuItem4Copy);
    menuItem5Cont.append(menuItem5Img,menuItem5Copy);
};
export {menuLoad};