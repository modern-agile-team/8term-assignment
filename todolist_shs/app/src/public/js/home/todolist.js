'use strict';

const todo = document.querySelector('#input'),
  plusButton = document.querySelector('#plus-button'),
  todoList = document.querySelector('#todo-list'),
  box = document.querySelector('#box');

document.addEventListener('keyup', enter);
let todoId = 1;

const addId = () => {
  todoId += 1;
};

// 플러스버튼 클릭시 add, addId 함수 호출
plusButton.addEventListener('click', add);
plusButton.addEventListener('click', addId);

// enter키를 눌렀을 때 add, addId, saveItem 함수 호출
function enter(event) {
  if (event && event.keyCode === 13) {
    const activeElement = document.activeElement;
    if (activeElement.id === 'input') {
      add();
      addId();
    } else if (activeElement.classList.contains('editable')) {
      saveItem(activeElement);
    }
  }
}

// Todolist 추가 함수
function add() {
  if (todo.value) {
    const div = document.createElement('div');
    div.innerHTML = `
      <input type="checkbox" id="complete-line" name="todo" onclick="Check(this)">
      <input type="text" id="list-text" disabled value="${todo.value}">
      <span>
          <!-- 수정 아이콘 -->
          <img src="https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-pencil-64.png" id="edit" onclick="editItem(this)">
          <!-- 삭제 아이콘 -->
          <img src="https://cdn-icons-png.flaticon.com/512/12/12960.png" id="delete" onclick="deleteItem(this)">
      </span>
    `;
    const childDiv = todoList.appendChild(div);
    childDiv.setAttribute('id', todoId);
    div.style.border = '2px solid grey';
    todo.value = '';
  } else {
    addErr();
  }
}

// 체크박스 함수
function Check(checkbox) {
  const listText = checkbox.parentNode.querySelector('#list-text');

  if (checkbox.checked) {
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

// Todolist 수정 함수
function editItem(element) {
  const div = element.parentNode.parentNode;
  const listText = div.querySelector('#list-text');
  if (listText.disabled) {
    listText.disabled = false;
    listText.classList.add('editable');
    listText.focus();
    element.src =
      'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_check-256.png'; // 수정 완료 아이콘
  } else {
    saveItem(listText);
    element.src =
      'https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-pencil-64.png'; // 수정 아이콘
  }
}

// Todolist 저장 함수
function saveItem(element) {
  const div = element.parentNode;
  const editIcon = div.querySelector('#edit');
  element.disabled = true;
  editIcon.src =
    'https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-pencil-64.png'; // 수정 아이콘
}

// Todolist 삭제 함수
function deleteItem(element) {
  const div = element.parentNode.parentNode;
  div.remove();
}
