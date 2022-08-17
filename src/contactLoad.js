const content = document.getElementById('content');

const contactLoad = () =>{
    const headlineCont = document.createElement('div');
    const main = document.createElement('div');

    const headline = document.createElement('h1');

    const hours = document.createElement('h2');
    const phone = document.createElement('h2');
    const email = document.createElement('h2');
    const address = document.createElement('h2');

    headline.textContent = 'Contact';

    hours.textContent = 'Open 8AM - 12PM WENS - SUN'
    phone.textContent = '1300-321-4321';
    email.textContent = 'floandeddies@examplemail.com';
    address.textContent = 'example address'

    content.append(headlineCont,main);

    headlineCont.append(headline);
    main.append(hours,phone,email,address);
}
export {contactLoad};