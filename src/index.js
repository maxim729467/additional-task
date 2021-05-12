import './styles.css';
import image1 from "./images/night.jpg";
import image2 from "./images/sunrise.jpg";
import image3 from "./images/day.jpg";
import image4 from "./images/sunset.jpg";

const refs = {
    body: document.querySelector('body'),
    time: document.querySelector('[data-time]'),
    name: document.querySelector('[data-name]'),
    target: document.querySelector('[data-target]'),
    dayPart: document.querySelector('[data-part]'),
};

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    hour = hour % 24 || 0;

    refs.time.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

function addZero(num) {
    return ((parseInt(num, 10) < 10 ? '0' : '') + num);
}

function setBg() {
    let today = new Date(),
    hour = today.getHours();
    
    
    if (hour >= 22 || hour < 5) {
        refs.body.style.backgroundImage = `url(${image1})`;
        refs.dayPart.textContent = "Доброй ночи,";
        refs.body.style.color = 'white';
        refs.body.style.opacity = '0.7';
    }
    
    else if (hour >= 5 && hour < 11) {
        refs.body.style.backgroundImage = `url(${image2})`;
        refs.dayPart.textContent = "Доброе утро,";
        refs.body.style.color = 'white';
        refs.body.style.opacity = '1'
    }
    
    else if (hour >= 11 && hour < 18) {
        refs.body.style.backgroundImage = `url(${image3})`;
        refs.dayPart.textContent = "Добрый день,";
        refs.body.style.color = 'black';
        refs.body.style.opacity = '0.7'
    }
    
    else if (hour >= 18 && hour < 22) {
        refs.body.style.backgroundImage = `url(${image4})`;
        refs.body.style.color = 'white';
        refs.body.style.opacity = '1'
        refs.dayPart.textContent = "Добрый вечер,";
        
    }
}

function getName() {
    if (localStorage.getItem('name') === null ||
        localStorage.getItem('name').length === 0) {
        refs.name.value = '[Введите имя]';
    }
    else {
        refs.name.value = localStorage.getItem('name');
    }
}

function getTarget() {
    if (localStorage.getItem('target') === null ||
        localStorage.getItem('target').length === 0) {
        refs.target.value = '[Введите свою цель]';
    }
    else {
        refs.target.value = localStorage.getItem('target');
    }
}

function onNameInputHandler(e) {
    localStorage.setItem('name', e.currentTarget.value);
    refs.name.style.width = ((e.currentTarget.value.length + 1) * 30) + 500 + 'px';


    if (e.type === 'keydown' && e.code === 'Enter') {

    if (e.currentTarget.value.length === 0) {
        refs.name.value = '[Введите имя]';
        refs.name.style.width = ((e.currentTarget.value.length + 1) * 30) + 500 + 'px';
    }
        refs.name.blur();
    }
    
}

function onTargetInputHandler(e) {
    localStorage.setItem('target', e.currentTarget.value);
    refs.target.style.width = ((e.currentTarget.value.length + 1) * 30) + 500 + 'px';
    
    if (e.type === 'keydown' && e.code === 'Enter') {

        if (e.currentTarget.value.length === 0) {
            refs.target.value = '[Введите имя]';
            refs.target.style.width = ((e.currentTarget.value.length + 1) * 30) + 500 + 'px';
    }
        refs.target.blur();
        return;
    }
}

function onItemFocusHandler(e) {
    e.currentTarget.value = '';
}

function onNameBlurHandler(e) {
    getName(e);
}

function onTargetBlurHandler(e) {
    getTarget(e);
}

refs.name.addEventListener('keydown', onNameInputHandler);
refs.name.addEventListener('input', onNameInputHandler);
refs.name.addEventListener('focus', onItemFocusHandler);
refs.name.addEventListener('blur', onNameBlurHandler);

refs.target.addEventListener('keydown', onTargetInputHandler);
refs.target.addEventListener('input', onTargetInputHandler);
refs.target.addEventListener('focus', onItemFocusHandler);
refs.target.addEventListener('blur', onTargetBlurHandler);

showTime();
setBg();
getName();
getTarget();

