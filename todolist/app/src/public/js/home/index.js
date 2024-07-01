"use strict";
const addBtn = document.querySelector("#add"),
  list = document.querySelector("#list");

addBtn.addEventListener("click", add);

function updateList(val) {
  const req = {
    crud: "update",
    id: val.id,
    column: val.name,
    value: val.checked ? 0 : 1, //체크되어있다면 값으로 0을 보내고 아님 1을 보낸다 반댓값을 보내기
  };
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
function deleteList(tag) {
  const req = {
    crud: tag.name,
    id: tag.id,
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
        list.submit();
      }
    });
}

function add() {
  const text = document.querySelector("#text");
  const req = {
    crud: addBtn.id,
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
        list.submit();
      } else {
        return alert(res.msg);
      }
    });
}
