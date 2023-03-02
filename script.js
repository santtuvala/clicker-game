function get(id) { return document.getElementById(id); }

let cookies = 0;
let cookiesPerSecond = 0;

const cookie = get('cookie');
const cookieCounter = get('cookie-counter');
const cpsCounter = get('cps-counter');

const cursorUpgrade = get('cursor-upgrade');
const grandmaUpgrade = get('grandma-upgrade');
const farmUpgrade = get('farm-upgrade');
const mineUpgrade = get('mine-upgrade');
const factoryUpgrade = get('factory-upgrade');

function updateCookieCounter() {
    cookieCounter.innerHTML = `${cookies} cookies`;
}

function updateCpsCounter() {
    cpsCounter.innerHTML = `${cookiesPerSecond} cps`;
}

cookie.onclick = function() {
    cookies++;
    updateCookieCounter();
}

cursorUpgrade.onclick = function() {
    if (cookies < 15) return;
    cookies -= 15;
    updateCookieCounter();
    cookiesPerSecond += 1;
    updateCpsCounter();
}

grandmaUpgrade.onclick = function() {
    if (cookies < 100) return;
    cookies -= 100;
    updateCookieCounter();
    cookiesPerSecond += 10;
    updateCpsCounter();
}

farmUpgrade.onclick = function() {
    if (cookies < 1000) return;
    cookies -= 1000;
    updateCookieCounter();
    cookiesPerSecond += 120;
    updateCpsCounter();
}

mineUpgrade.onclick = function() {
    if (cookies < 10000) return;
    cookies -= 10000;
    updateCookieCounter();
    cookiesPerSecond += 1500;
    updateCpsCounter();
}

factoryUpgrade.onclick = function() {
    if (cookies < 100000) return;
    cookies -= 100000;
    updateCookieCounter();
    cookiesPerSecond += 20000;
    updateCpsCounter();
}

function update() {
    cookies += cookiesPerSecond;
    updateCookieCounter();
}

setInterval(update, 1000);