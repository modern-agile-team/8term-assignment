"use strict";
const addBtn = document.querySelector("#add"),
  list = document.querySelector("#list");

addBtn.addEventListener("click", add);

function updateText(val) {
  const id = val.id;
  const textTag = document.querySelector(`#text${val.id}`);
  const req = {
    id: id,
    column: textTag.name,
    value: textTag.value,
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
    column: val.name,
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
function deleteList(tag) {
  const req = {
    id: tag.id,
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

function add() {
  const text = document.querySelector("#text");
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
        list.submit();
      } else {
        return alert(res.msg);
      }
    });
}
