import {homeLoad} from './homeLoad.js';
import {menuLoad} from './menuLoad.js';
import {contactLoad} from './contactLoad';

const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click',function(){
    clearPage();
    homeLoad();
});
menuBtn.addEventListener('click',function(){
    clearPage();
    menuLoad();
});
contactBtn.addEventListener('click',function(){
    clearPage();
    contactLoad();
});

function clearPage(){
    content.replaceChildren();
};

homeLoad();