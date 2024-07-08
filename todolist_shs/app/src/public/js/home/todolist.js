'use strict';

const todo = document.querySelector('#input'),
  plusButton = document.querySelector('#plus-button'),
  todoList = document.querySelector('#todo-list'),
  box = document.querySelector('#box');

// 플러스버튼 클릭시 add 함수 호출
plusButton.addEventListener('click', add);

// enter키를 눌렀을 때 add 함수 호출
function enter() {
  if (window.event.keyCode == 13) return add();
}

// add 함수가 잘 작동되는지 테스트(미완)
function add() {
  if (todo.value) {
    const div = document.createElement('div');
    div.innerHTML = todo.value + '<span>체크박스</span>';
    todoList.appendChild(div);
    div.style.border = '2px solid grey';
    todo.value = '';
  } else {
    addErr();
  }
}

// 입력란에 입력한 값이 없을 때
function addErr() {
  if (!todo.value) {
    return alert('할 일을 입력해주십시오.');
  }
}
