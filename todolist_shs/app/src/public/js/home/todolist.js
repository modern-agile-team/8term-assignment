'use strict';

const todo = document.querySelector('#input'),
  plusButton = document.querySelector('#plus-button'),
  todoList = document.querySelector('#todo-list');

document.addEventListener('DOMContentLoaded', fetchTodos);
document.addEventListener('keyup', enter);

// 플러스 버튼 클릭 시 add 함수 호출
plusButton.addEventListener('click', add);

// enter키 입력 시 실행 함수
function enter(event) {
  if (event && event.keyCode === 13) {
    const activeElement = document.activeElement;

    // 할 일 입력란이 활성화된 상태라면
    if (activeElement.id === 'input') add();
    // 입력값을 다 쓰고 비활성 상태일 때 목록의 내용 저장
    else if (activeElement.classList.contains('editable')) {
      saveItem(activeElement);
    }
  }
}

// Todolist 추가 함수
function add() {
  if (todo.value) {
    const description = todo.value;
    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, is_check: false }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchTodos();
      })
      .catch((err) => console.error('Error:', err));

    todo.value = '';
  } else {
    addErr();
  }
}

// Todolist 목록을 불러오는 함수
function fetchTodos() {
  fetch('http://localhost:3001/todos')
    .then((response) => response.json())
    .then((data) => {
      todoList.innerHTML = ''; // 할 일 목록 초기화
      data.forEach((todo) => {
        // 할 일이 생길 때마다 반복
        const div = document.createElement('div');
        div.innerHTML = `
          <input type="checkbox" id="complete-line" name="todo" ${
            todo.is_check ? 'checked' : ''
          } onclick="Check(this)">
          <input type="text" id="list-text" disabled value="${
            todo.description
          }">
          <span>
              <!-- 수정 아이콘 -->
              <img src="https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-pencil-64.png" id="edit" onclick="editItem(this)">
              <!-- 삭제 아이콘 -->
              <img src="https://cdn-icons-png.flaticon.com/512/12/12960.png" id="delete" onclick="deleteItem(this)">
          </span>
        `;
        // 할 일 목록에 추가한 것을 변수에 저장
        const childDiv = todoList.appendChild(div);
        // div 요소에 id 속성 추가
        childDiv.setAttribute('id', todo.id);
        div.style.border = '1px solid grey';

        if (todo.is_check) {
          const listText = div.querySelector('#list-text');
          listText.style.textDecoration = 'line-through';
          listText.style.textDecorationThickness = '1px';
          listText.style.color = 'grey';
        }
      });
    })
    .catch((err) => console.error('Error:', err));
}

// 체크박스 함수
function Check(checkbox) {
  const listText = checkbox.parentNode.querySelector('#list-text');
  const todoId = checkbox.parentNode.id;
  const is_check = checkbox.checked;

  fetch(`http://localhost:3001/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ is_check }),
  })
    .then(() => {
      if (is_check) {
        listText.style.textDecoration = 'line-through';
        listText.style.textDecorationThickness = '1px';
        listText.style.color = 'grey';
      } else {
        listText.style.textDecoration = 'none';
        listText.style.color = 'black';
      }
    })
    .catch((err) => console.error('Error:', err));
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
    // 편집 가능 클래스 생성
    listText.classList.add('editable');
    listText.focus();
    listText.setSelectionRange(listText.value.length, listText.value.length);
    element.src =
      'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_check-256.png';
  } else {
    saveItem(listText);
    element.src =
      'https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-pencil-64.png';
  }
}

// Todolist 저장 함수
function saveItem(element) {
  const div = element.parentNode;
  const editIcon = div.querySelector('#edit');
  const todoId = div.id;
  const description = element.value;

  fetch(`http://localhost:3001/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  })
    .then(() => {
      element.disabled = true;
      // 편집 가능 클래스 삭제
      element.classList.remove('editable');
      editIcon.src =
        'https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-pencil-64.png';
    })
    .catch((err) => console.error('Error:', err));
}

// Todolist 삭제 함수
function deleteItem(element) {
  const div = element.parentNode.parentNode;
  const todoId = div.id;

  fetch(`http://localhost:3001/todos/${todoId}`, {
    method: 'DELETE',
  })
    .then(() => {
      div.remove(); // 삭제된 목록 제거
    })
    .catch((err) => console.error('Error:', err));
}
