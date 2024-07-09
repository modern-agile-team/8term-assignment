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

// Todolist 추가 함수
function add() {
  if (todo.value) {
    const div = document.createElement('div');
    div.innerHTML = `<input type="checkbox" id="complete-line" name="todo" onclick="Check(this)">  <input type="text" id="list-text" disabled value=${todo.value}>
    <span>
       <!-- 수정 아이콘 -->
        <img src="https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-pencil-64.png" id="edit" onclick="editItem(this)" />
        <!-- 삭제 아이콘 -->
        <img src="https://cdn-icons-png.flaticon.com/512/12/12960.png" id="delete" onclick="deleteItem(this)" />
    </span>
    `;
    todoList.appendChild(div);
    div.style.border = '2px solid grey';
    todo.value = '';
  } else {
    addErr();
  }
}

// 체크박스 함수
function Check() {
  const completeLine = document.querySelector('#complete-line');
  const listText = document.querySelector('#list-text');

  if (completeLine.checked) {
    listText.style.textDecoration = 'line-through';
    listText.style.textDecorationThickness = '2px';
    listText.style.color = 'grey';
  } else {
    listText.style.textDecoration = 'none';
    listText.style.color = 'black';
  }
}

// 입력란에 입력한 값이 없을 때
function addErr() {
  if (!todo.value) {
    return alert('할 일을 입력해주십시오.');
  }
}

// todo 수정 함수
function editItem(element) {
  const div = element.parentNode;
}

// todo 삭제 함수
function deleteItem(element) {
  const div = element.parentNode.parentNode;
  div.remove();
}
