"use strict";

const todo = document.querySelector("#id");
const addBtn = document.querySelector("button");
addBtn.addEventListener("click", createTodo());

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
  const todoInput = document.getElementById("todoInput").value;
  // console.log(todoInput.value);
  newLi.appendChild(newBtn); //li안에 체크박스 btn 담기
  newLi.appendChild(newSpan); //li안에 span 담기

  console.log(todoInput, 1111);

  newSpan.textContent = todoInput.value; //span안에 value값 담기

  todoList.appendChild(newLi);

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete"); //toggle 형태로 li에 complete클래스명이 붙도록
  });

  const req = {
    content: todoInput,
  };

  console.log(req);
  // console.log(JSON.stringify(req));

  fetch("/todolist", {
    //입력데이터를 list에 두는 것 + 새로고침시에도 유지?
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/todolist";
      } else {
        alert("다시 입력하십시오");
      }
    })
    .catch((err) => {
      console.error("할 일 작성 중 에러 발생");
    });

  fetch("/todolist", {
    //get은 테이블을 보여주는 역할을 한다(데이터 조회)
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(error));
}
