"use strict";
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", add);

function add() {
  const text = document.querySelector("#text");
  const req = {
    id: addBtn.id,
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
        console.log(res.text);
      }
    });
}
