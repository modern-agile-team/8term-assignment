"use strict";
//front

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

function keyCodeCheck(event) {
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
  const todoInputValue = todoInput.value;
  todoInput.value = "";

  const newLi = document.createElement("li");
  const newBtn = document.createElement("button");
  const newSpan = document.createElement("span");

  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);

  newSpan.textContent = todoInputValue;

  todoList.appendChild(newLi);

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });

  const req = {
    content: todoInputValue,
  };

  fetch("/todolist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) {
        alert("다시 입력하십시오.");
      }
    })
    .catch((err) => {
      console.error("할 일 작성 중 에러 발생");
    });
}

window.onload = function () {
  fetch("/todolist", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      res.todos.forEach((x) => {
        console.log(x);
        const newLi = document.createElement("li");
        const newBtn = document.createElement("button");
        const newSpan = document.createElement("span");

        newLi.appendChild(newBtn);
        newLi.appendChild(newSpan);

        newSpan.textContent = x.content;

        todoList.appendChild(newLi);

        newBtn.addEventListener("click", () => {
          newLi.classList.toggle("complete");
        });
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
