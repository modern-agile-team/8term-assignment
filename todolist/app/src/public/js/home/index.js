"use strict";
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
function getLastId() {
  const lastList = document.querySelector("#todolist").lastElementChild;
  if (lastList === null) return 0;
  return Number(lastList.id);
}

function updateText(idText) {
  if (!idText.value) {
    return alert("입력해주세요");
  }
  textReadMod(idText.id);
  const req = {
    id: idText.id,
    col: "description",
    value: idText.value,
  };

  fetch("edit", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (!res.success) {
        alert(res.msg);
      }
    });
}

function updateCheck(val) {
  const thisId = val.id.match(/\d+/)[0];
  frontChecked(thisId, val.checked);
  const req = {
    id: thisId,
    col: "check",
    value: val.checked ? "0" : "1", //체크되어있다면 값으로 0을 보내고 아님 1을 보낸다 반댓값을 보내기
  };
  fetch(`/edit/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(res.msg);
      }
    });
}
function deleteList(id) {
  const thisId = id.match(/\d+/)[0];
  const hideList = document.getElementById(thisId);
  hideList.setAttribute("class", "hide");
  const req = {
    id: thisId,
  };
  fetch("/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) {
        alert(res.msg);
      }
    });
}

function addList() {
  const lastId = getLastId();

  frontInputList(lastId + 1, text.value);

  const req = {
    id: lastId + 1,
    text: text.value,
  };
  text.value = "";
  fetch("/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) {
        return alert(res.msg);
      }
    });
}
function frontInputList(myId) {
  const todolist = document.querySelector("#todolist");
  todolist.innerHTML += ` <div id ="${myId}" class = "div-hover">
    <input type="checkbox" id="checkbox${myId}" onClick="updateCheck(this)"/>
    <input type = "text" id = "text${myId}" value = "${text}" class ="input1 list-text" disabled></>
    &nbsp;
    <button type="button" id="update${myId}" onClick ="editMod(this)" class ="edit-button"></button>&nbsp;
    <button type ="button" id="delete${myId}"  onClick="deleteList(this.id)" class ="delete-button"></button>
    <hr class ="underline"/>
  </div>
  `;
}
function textReadMod(id) {
  const thisText = document.querySelector(`#text${id}`);
  thisText.setAttribute("disabled", "");
  const thisEdit = document.querySelector(`#update${id}`);
  thisEdit.setAttribute("onClick", "editMod(this)");
  thisEdit.setAttribute("class", "edit-button");
  thisEdit.innerText = "";
}

function frontChecked(id, check) {
  const thisText = document.querySelector(`#text${id}`);
  if (check) {
    //체크상태면
    thisText.setAttribute("class", "input1 list-text Cancellation-line");
  } else {
    thisText.setAttribute("class", "input1 list-text");
  }
}
