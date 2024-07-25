"use strict";

const description = document.querySelector("#description"),
  plusImage = document.querySelector("#plusImage"),
  deleteButton = document.getElementById("rmImg"),
  newlistbox = document.querySelector("#newlistbox");

plusImage.addEventListener("click", login);
deleteButton.addEventListener("click", remove);
//editButton.addEventListener("click", edit);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (document.activeElement.id === "plusImage") {
      login(event);
    }
  }
});

function login() {
  const req = {
    description: description.value,
  };

  fetch("/login", {
    // 추가
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        addElement();
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("에 러 발 생 ; ;");
    });
}

function edit() {
  const req = {
    description: description.value,
  };

  fetch("/login", {
    // 수정
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log(description.value);
        //그대로 저장하는 기능
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("에 러 발 생 ; ;");
    });
}

function remove() {
  // 삭제
  fetch("/login", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log("삭제 성공");
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("삭제 오류 ; ;");
    });
}

function addElement() {
  let newlistbox = document.getElementById("newlistbox");

  let newElement = document.createElement("div");
  document.getElementById("newlistbox").appendChild(newElement);
  newElement.innerHTML = `<div id='newsmall' class='newsmall'><input type="checkbox" id="checkbox" class="checkbox"><span class="description">${description.value}</span>
  <input type="image" class="editImg" id="edit" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png"onclick="">
  <input type="image" class="rmImg" id="rmImg" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-256.png"onclick="">
  </div>`;
  // newlist.prepend(document.createTextNode(description.value));
  newlistbox.appendChild(newElement);

  newlistbox.style.height = newlist.scrollHeight + "px";
  description.value = "";
  // 입력 필드 초기화
}
// function InputValue(event) {
//   event.preventDefault(); // 폼 제출을 막기 위해 이벤트 기본 동작 방지
//   let description = document.getElementById("description").value;
//   if (description) {
//     addElement(description);
//   } else {
//     alert("입력하세요");
//   }
// }

// document.getElementById("imageForm").addEventListener("submit", InputValue);

// function addElement(description) {
//   let newElement = document.createElement("p");
//   newElement.descriptionContent = description;
//   document.getElementById("result").appendChild(newElement);
// }
