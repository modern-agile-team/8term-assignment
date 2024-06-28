"use strict";
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", add);

function add() {
  const req = {
    id: addBtn.id,
  };
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log);
}
