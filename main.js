var input = document.querySelector('input[type="text"]');
var ul = document.querySelector('ul');
var tipsBtn = document.querySelector('.tipBtn');
var closeBtn = document.querySelector('.closebtn');
var clearBtn = document.querySelector('.clear');

var overlay = document.getElementById('overlay');
var jokeText = document.querySelector('.jokeText'); 
var jokeBtn = document.querySelector('.jokeBtn');
var jokeCloseBtn = document.querySelector('#jokeClosebtn');

import {jokeBtnInit, jokeCloseBtnInit, ulInit,inputInit, clearBtnInit, tipsBtnInit, closeBtnInit} from './eventListeners.js';
import { getApiData } from "./getApiData.js";

jokeBtnInit();
jokeCloseBtnInit();
ulInit(moveToCorrectPosition, save);
inputInit(save, initDeleteFunctions);
clearBtnInit(save);
tipsBtnInit();
closeBtnInit();

var request = getApiData('https://icanhazdadjoke.com/slack');
request.done(data => {
    var joke = data.attachments[0].text;
    var jokesUl = document.querySelectorAll('.tips')[1];
    var li = document.createElement('li');
    li.append(joke);
    jokesUl.append(li);
})

function moveToCorrectPosition(li) {
    var firstChecked = document.querySelector('ul li.checked');
    var secondChecked = document.querySelectorAll('ul li.checked')[1];
    if (li.classList.contains('checked')) {
        if (secondChecked) {
            secondChecked.before(li); //move li before secondChecked
        }
        else {
            ul.append(li); // move to the end
        }
    }
    else {
        if(firstChecked)
            firstChecked.before(li);
    }
}

function initDeleteFunctions() {
    var spans = document.querySelectorAll('span');
    var is = document.querySelectorAll('i');
    for(let span of spans) {
        if (span.parentElement.tagName == 'LI')
            span.addEventListener('click', () => {
                span.parentElement.remove();
                save();
            });
    }
    for(let i of is) {
        if (i.parentElement.parentElement.tagName == 'LI')
            i.addEventListener('click', () => {
                i.parentElement.parentElement.remove();
                save();
            });
    }
}

function save() {
    localStorage.setItem("todos", document.querySelector('.todos').innerHTML);
}

function load() {
    if (localStorage.getItem("todos"))
        ul.innerHTML = localStorage.getItem("todos");
}


load();
initDeleteFunctions();