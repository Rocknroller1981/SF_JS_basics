//ВНИМАНИЕ! ЗАДАНИЯ 3-5 даны в виде ссылок на codepen, ниже только код JS

// md 9 task 1 start =======================================================================================
let stringXML =
    `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const DOMstr = parser.parseFromString(stringXML, "text/xml");
const listNode = DOMstr.querySelector("list");
const statusNode = listNode.querySelectorAll("student");
const statusNode0 = statusNode[0];
const statusNode1 = statusNode[1];
const nameNode0 = statusNode0.querySelector("name");
const firstNode0 = nameNode0.querySelector("first");
const secondNode0 = nameNode0.querySelector("second");
const nameNode1 = statusNode1.querySelector("name");
const firstNode1 = statusNode1.querySelector("first");
const secondNode1 = statusNode1.querySelector("second");
const ageNode0 = statusNode0.querySelector("age");
const profNode0 = statusNode0.querySelector("prof");
const ageNode1 = statusNode1.querySelector("age");
const profNode1 = statusNode1.querySelector("prof");
const langAttr0 = nameNode0.getAttribute('lang');
const langAttr1 = nameNode1.getAttribute('lang');


let final = {
    list: [{
            lang: langAttr0,
            name: firstNode0.textContent + " " + secondNode0.textContent,
            age: Number(ageNode0.textContent),
            prof: profNode0.textContent
        },
        {
            lang: langAttr1,
            name: firstNode1.textContent + " " + secondNode1.textContent,
            age: Number(ageNode1.textContent),
            prof: profNode1.textContent
        }
    ]
}

console.log(typeof final)
console.log(final)

// md 9 task 1 end =======================================================================================

// md 9 task 2 start =======================================================================================

let persons = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`

let personsObj = JSON.parse(persons);
let list = personsObj.list;

let result = {
    list: [{
            name: list[0].name,
            age: list[0].age,
            prof: list[0].prof
        },
        {
            name: list[1].name,
            age: list[1].age,
            prof: list[1].prof
        }
    ]

}

console.log(result, typeof(result))

// md 9 task 2 end =======================================================================================

// md 9 task 3 start =======================================================================================
//!!!!!!!!!ВЫПОЛНЕНИЕ ЗАДАНИЯ ПО ССЫЛКЕ: https://codepen.io/rocknroller1981/pen/xxXoNmQ?editors=1111 

let starter = document.querySelector('.btn');
let container = document.querySelector('.pix');
let hidden = document.querySelector('.hide');

function getNumber(number) {
    if (number > 10) {
        console.log('Your number is out of range from 1 to 10. Please, pick another one.');
        hidden.classList.add('show');
        return false;
    } else if (number <= 0) {
        console.log('Your number is out of range from 1 to 10. Please, pick another one.');
        hidden.classList.add('show');
        return false;
    } else if (Boolean(number) === false) {
        console.log('Your number is out of range from 1 to 10. Please, pick another one.');
        hidden.classList.add('show');
        return false;
    } else {
        //можно было бы limit взять из input.value через ${} в конце url, но раз уж сделал через метод slice, то решил не менять код
        let str = 'https://picsum.photos/v2/list?page=2&limit=?';
        let cutStr = str.slice(0, -1);
        let url = cutStr + number;
        hidden.classList.remove('show');
        //console.log(number, url)
        getPix(url)
    }
}

function getPix(url) {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
        if (req.status !== 200) {
            console.log('Error' + req.status)
        } else {
            const result = JSON.parse(req.response);
            //console.log(result);
            localStorage.setItem('upload', JSON.stringify(result));
            showPix(result);
        }
    }
    req.onerror = function() {
        console.log('smth went wrong');
    }
    req.send();
};

function showPix(data) {
    let arrayHolder = '';
    data.forEach((item) => {
        let array = `<div class="holder"> <img class="picture" src = "${item.download_url}" style="margin:20px;border-width:2px;border-style:solid;border-color:orange" width = 100% height = 100%/><p style="font-size:14px;color:white;text-align:center">${item.author}</p></div>`;
        arrayHolder += array;
    })
    container.innerHTML = arrayHolder;
}

starter.addEventListener('click', () => {
    localStorage.clear();
    getNumber(+document.querySelector('.get-number').value)
})

document.addEventListener('DOMContentLoaded', () => {
    const myJSON = localStorage.getItem('upload');
    if (myJSON) {
        console.log(JSON.parse(myJSON));
        showPix(JSON.parse(myJSON))
    }
})

// md 9 task 3 end =======================================================================================

// md 9 task 4 start =======================================================================================
//!!!!!!!!!ВЫПОЛНЕНИЕ ЗАДАНИЯ ПО ССЫЛКЕ: https://codepen.io/rocknroller1981/pen/xxPGmoo

let starter = document.querySelector('.btn');
let container = document.querySelector('.pix');
let inputs = document.querySelectorAll('.get-number');
let hidden = document.querySelectorAll('.hide');

function checkSize(width, height) {
    return new Promise((resolve, reject) => {
            if (width >= 100 && height >= 100 && width <= 300 && height <= 300) {
                resolve({ width: width, height: height })
            } else { reject() }
        })
        .then((value) => {
            showPic(value.width, value.height);
            hidden.forEach((item) => item.classList.remove('show'));
        })
        .catch(() => { hidden.forEach((item) => item.classList.add('show')) });
}

function showPic(width, height) {
    fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => {
            console.log(response), console.log(response.url);

            let array = `<div class="holder"> <img class="picture" src = "${response.url}" width=100% height=100%style="margin:20px;border-width:2px;border-style:solid;border-color:orange"></div>`;
            container.innerHTML = array;
        })
}

starter.addEventListener('click', () => {
    checkSize(+document.getElementById('width').value, +document.getElementById('height').value)
})

// md 9 task 4 end =======================================================================================

// md 9 task 5 start =======================================================================================
//!!!!!!!!!ВЫПОЛНЕНИЕ ЗАДАНИЯ ПО ССЫЛКЕ: https://codepen.io/rocknroller1981/pen/dyZYGeB?editors=1111

let starter = document.querySelector('.btn');
let container = document.querySelector('.pix');
let inputs = document.querySelectorAll('.get-number');
let hidden = document.querySelectorAll('.hide');
let pages = document.querySelector('.page');
let limits = document.querySelector('.limit');
let double = document.querySelector('.double');

function checkNum(page, limit) {
    return new Promise((resolve, reject) => {
        if (page <= 10 && page >= 1 && limit <= 10 && limit >= 1) { resolve() } else { reject() }
    })

    .then(() => {
            console.log('all works well');
            hidden.forEach((item) => item.classList.remove('show'));
            getResult(page, limit)
        })
        .catch(() => {
            console.log('all went wrong');
            hidden.forEach((item) => item.classList.add('show'));
            wrongNum(page, limit)
        })
}

function wrongNum(page, limit) {
    let pageCheck = page <= 10 && page >= 1;
    let limitCheck = limit <= 10 && limit >= 1;
    if (pageCheck == limitCheck) {
        pages.classList.remove('show');
        limits.classList.remove('show')
    } else if (pageCheck == false) {
        limits.classList.remove('show');
        double.classList.remove('show')
    } else {
        pages.classList.remove('show');
        double.classList.remove('show')
    }

}

function getResult(page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => { console.log(response.url); return response.json() })
        .then((json) => {
            localStorage.setItem('myJSON', JSON.stringify(json));
            let result = json;
            showPix(result);
            console.log(result)
        })
        .catch(() => { console.log('OMFG smth went WRONG') })
}

function showPix(result) {
    let arrayHolder = '';
    result.forEach((item) => {
        let array = `<div class="holder"> <img class="picture" src = "${item.download_url}" style="margin:20px;border-width:2px;border-style:solid;border-color:orange" width = 100% height = 100%/></div>`;
        arrayHolder += array;
    })
    container.innerHTML = arrayHolder;
}

document.addEventListener('DOMContentLoaded', () => { const myJSON = localStorage.getItem('myJSON'); if (myJSON) { showPix(JSON.parse(myJSON)) } });

starter.addEventListener('click', () => {
    localStorage.clear();
    checkNum(+document.getElementById('page').value, +document.getElementById('limit').value)
})

// md 9 task 5 end =======================================================================================