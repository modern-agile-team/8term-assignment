"use strict";

const todo = document.querySelector("#id"),
  addBtn = document.querySelector("button");

addBtn.addEventListener("click", todolist);

function todolist() {
  const req = {
    id: todoInput.value,
  };

  console.log(req);
  console.log(JSON.stringify(req));

  fetch("/todolist", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}

function keyCodeCheck() {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
}
addBtn.addEventListener("click", () => {
  if (todoInput.value !== "") {
    createTodo();
  }
});

function createTodo() {
  const todoList = document.querySelector("#todoList");
  const newLi = document.createElement("li"); //li생성
  const newBtn = document.createElement("button"); //체크박스로 쓰일 button
  const newSpan = document.createElement("span"); // li안 텍스트를 담을 span
  const todoInput = document.querySelector("#todoInput");

  newLi.appendChild(newBtn); //li안에 체크박스 btn 담기
  newLi.appendChild(newSpan); //li안에 span 담기

  newSpan.textContent = todoInput.value; //span안에 value값 담기

  todoList.appendChild(newLi);

  todoInput.value = "";
}
