//ВНИМАНИЕ! Решения даны в виде ссылок на codepen, ниже только код JS

// md 10 task 1 and task 2 start =======================================================================================
//задания объединины в единое решение для удобства по ссылке: https://codepen.io/rocknroller1981/pen/xxPZjxL?editors=1111

let btn = document.querySelector('.btn');
let arrows = document.querySelectorAll('.icon');
let white = document.querySelector('.one');
let black = document.querySelector('.two');

function swopIcon() {
    arrows.forEach(item => item.classList.toggle('hide'));
    alert('screen width = ' + window.screen.width + "px" + " " + ' screen height= ' + window.screen.height + "px");
    console.log(window.innerWidth, window.innerHeight);
    console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);
}


document.addEventListener('DOMContentLoaded', () => black.classList.add('hide'));
btn.addEventListener('click', swopIcon)

// md 10 task 1 and task 2 end =======================================================================================

// md 10 task 3 start ========================================================================================
//Вариант решения, когда геолокацию отправляет в чат пользователь: https://codepen.io/rocknroller1981/pen/podbxRR?editors=1011

let chat = document.querySelector('.chat');
let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('.msg');
let sendMsg = document.getElementById('sendMsg');
let spot = document.getElementById('spot');
const messages = document.querySelectorAll('.message');
let clear = document.querySelector('.clear');
let websocket;
let link;

function showText(text) {
    chat.insertAdjacentHTML('beforeend', `<p class="message yourMsg">${text}</p>`);
};

function showResponse(answer) {
    if (answer.includes('map-link')) { console.log(answer); return false } else {
        chat.insertAdjacentHTML('beforeend', `<p class="message serverMsg">${answer}</p>`)
    };
}

function getLocation(latitude, longitude) {
    let urlGeo = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    link = `<a id = "map-link" target="_blank" href =${urlGeo}>User's Location</a>`;
    websocket.send(link);
    showText('Your message:' + "<br>" + link);
    return link;
};

function checkLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            getLocation(latitude, longitude);
            console.log(position)
        })
    } else { websocket.send('Geolocation is not supported in your browser') }
};

document.addEventListener('DOMContentLoaded', () => {
    websocket = new WebSocket("wss://echo-ws-service.herokuapp.com");
    websocket.onopen = (feedback) => {
        showResponse("Wellcome to chat");
    };
    websocket.onmessage = (feedback) => {
        setTimeout(() =>
            showResponse('Server response:' + "<br>" + feedback.data), 2000)
    };
    websocket.onerror = (feedback) => {
        showResponse(feedback.data);
    };
});

function clearChat() {
    chat.innerHTML = '';
}

sendMsg.addEventListener('click', () => {
    showText('Your message:' + "<br>" + input.value);
    websocket.send(input.value)
});
spot.addEventListener('click', checkLocation);
clear.addEventListener('click', clearChat)



// вариант решения, когда геолокацию выдает сервер: https://codepen.io/rocknroller1981/pen/zYPBvmx?editors=1111

let chat = document.querySelector('.chat');
let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('.msg');
let sendMsg = document.getElementById('sendMsg');
let spot = document.getElementById('spot');
const messages = document.querySelectorAll('.message');
let clear = document.querySelector('.clear');
let websocket;

function showText(text) {
    chat.insertAdjacentHTML('beforeend', `<p class="message yourMsg">${text}</p>`);
};

function showResponse(answer) {
    chat.insertAdjacentHTML('beforeend', `<p class="message serverMsg">${answer}</p>`);
}

function getLocation(latitude, longitude) {
    let urlGeo = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    let link = `<a id = "map-link" target="_blank" href =${urlGeo}>Your location</a>`;
    websocket.send(link)
};

function checkLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            getLocation(latitude, longitude);
            console.log(position)
        })
    } else { websocket.send('Geolocation is not supported in your browser') }
};

document.addEventListener('DOMContentLoaded', () => {
    websocket = new WebSocket("wss://echo-ws-service.herokuapp.com");
    websocket.onopen = (feedback) => {
        showResponse("Wellcome to chat");
    };
    websocket.onmessage = (feedback) => {
        setTimeout(() =>
            showResponse('Server response:' + "<br>" + feedback.data), 2000)
    };
    websocket.onerror = (feedback) => {
        showResponse(feedback.data);
    };
});

function clearChat() {
    chat.innerHTML = '';
}

sendMsg.addEventListener('click', () => {
    showText('Your message:' + "<br>" + input.value);
    websocket.send(input.value)
});
spot.addEventListener('click', checkLocation);
clear.addEventListener('click', clearChat)

//md 10 task 3 end ========================================================================================