"use strict";
const addBtn = document.querySelector("#add"),
  list = document.querySelector("#list");

addBtn.addEventListener("click", add);

function is_check(check) {
  const req = {
    crud: check.type,
    id: check.id,
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
