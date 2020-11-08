
var input = document.querySelector('input[type="text"]');
var ul = document.querySelector('ul');
var tipsBtn = document.querySelector('.tipBtn');
var closeBtn = document.querySelector('.closebtn');
var clearBtn = document.querySelector('.clear');

var overlay = document.getElementById('overlay');
var jokeText = document.querySelector('.jokeText'); 
var jokeBtn = document.querySelector('.jokeBtn');
var jokeCloseBtn = document.querySelector('#jokeClosebtn');

export const jokeBtnInit = () => {
    jokeBtn.addEventListener('click', function() {
        jokeOverlay.style.height = '100%';
    });
}
export const jokeCloseBtnInit = () => {
    jokeCloseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        jokeOverlay.style.height = '0';
    });
}
export const ulInit = (moveToCorrectPosition, save) => {
    ul.addEventListener("click", function(e) {
        var target = e.target;
        if(target.tagName == 'LI') {
            target.classList.toggle('checked');
            moveToCorrectPosition(target);
            save();
        }
    });
}

export const inputInit = (save, initDeleteFunctions) => {
    input.addEventListener("keypress", function(key) {
        if(key.which == 13 && this.value) {
            var li = document.createElement('li');
            var span = document.createElement('span');
            var icon = document.createElement('i');

            var newTodo = this.value;
            this.value = "";

            icon.classList.add('fas', 'fa-trash-alt');
            span.appendChild(icon);
            li.append(span,newTodo);
            ul.prepend(li);
            initDeleteFunctions();
            save();
        }
    });
}

export const clearBtnInit = (save) => {
    clearBtn.addEventListener('click', function() {
        ul.innerHTML = "";
        save();
    });
}

export const tipsBtnInit = () => {
    tipsBtn.addEventListener('click', function() {
        overlay.style.height = '100%';
    });
}

export const closeBtnInit = () => {
    closeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        overlay.style.height = '0';
    });
}