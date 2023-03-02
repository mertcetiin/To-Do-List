let submitDOM = document.querySelector('#submit');
let toDoContainerDOM = document.querySelector('#toDoContainer');
let textDOM = document.querySelector('#text');
let resetDOM = document.querySelector('#reset');
let scoreDOM = document.querySelector('#score');


submitDOM.addEventListener('click', function () {
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    toDoContainerDOM.append(paragraph);
    paragraph.innerHTML = textDOM.value
    textDOM.value = ''

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through'
    });

    paragraph.addEventListener('dblclick', function () {
        paragraph.remove();
    });

    resetDOM.addEventListener('click', function () {
        paragraph.remove();
    });

});


let count = 0;
const submitEl = document.querySelector('#submit');
const scoreEl = document.querySelector('#score');
const resetEl = document.querySelector('#reset');


submitEl.addEventListener('click', function () {
    scoreEl.innerHTML = `${count}`
    count++;
});


resetEl.addEventListener('click', function () {
    scoreEl.innerHTML = '0'
    count--;
});