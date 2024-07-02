"use strict";
let maxId = 0;
document.addEventListener("DOMContentLoaded", loadList);
function loadList() {
  fetch("load", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        printList(res.data);
      }
    });
}

function printList(data) {
  const todolist = document.querySelector("#todolist");

  for (let i = 0; i < data.length; i++) {
    let tmpCheck = data[i].is_check ? "" : "checked";
    let tmpText = data[i].is_check ? "" : "Cancellation-line";

    todolist.innerHTML += ` <sapn>
                                <input type="checkbox" id="${data[i].id}" onClick="updateCheck(this)"
                                ${tmpCheck}/>
                               
                               <input type = "text" id = "text${data[i].id}" value = "${data[i].description}" class ="${tmpText} input1 list-text" disabled></>
                                <button type="button" id="${data[i].id}" name ="update" onClick ="editMod(this)">수정</button>
                                <button type ="button" id="${data[i].id}" name="delete" onClick="deleteList(this.id)">
                                삭제</button>
                                <hr class ="underline"/>
                            </sapn>
                            `;
  }
}
function getMaxId(data) {
  console.log(data[data.length - 1].id);
  if (data.length === 0) return 0;
  return data[data.length - 1].id;
}
function editMod(val) {
  const inputText = document.querySelector(`#text${val.id}`);
  inputText.removeAttribute("disabled"); //입력가능하게 만들기
  val.setAttribute("onClick", `updateText(getValue(${val.id}))`); //수정버튼의 onClick이벤트를 readMod함수로 연결
  val.innerText = "확인";
}
function getValue(val) {
  const id = val;
  const value = document.querySelector(`#text${id}`).value;
  return { id: id, value: value };
}
//----------------------------------------------------------------------------------------------------------
const addBtn = document.querySelector("#add"),
  list = document.querySelector("#list"),
  text = document.querySelector("#text");

addBtn.addEventListener("click", addList);

text.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addList();
  }
});

function updateText(idText) {
  const req = {
    id: idText.id,
    col: "description",
    value: idText.value,
  };

  fetch("/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        list.submit();
      } else {
        alert(res.msg);
      }
    });
}

function updateCheck(val) {
  const req = {
    id: val.id,
    col: "check",
    value: val.checked ? "0" : "1", //체크되어있다면 값으로 0을 보내고 아님 1을 보낸다 반댓값을 보내기
  };
  fetch("/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        list.submit();
      } else {
        alert(res.msg);
      }
    });
}
function deleteList(id) {
  const req = {
    id: id,
  };
  fetch("/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        list.submit();
      } else {
        alert(res.msg);
      }
    });
}

function addList() {
  const req = {
    text: text.value,
  };

  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        //list.submit();
      } else {
        return alert(res.msg);
      }
    });
}
