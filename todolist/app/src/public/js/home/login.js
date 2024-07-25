"use strict";
window.onload = async function () {
  let A = await check();
  console.log(A[0].id);
  startlist(A);
};

const description = document.querySelector("#description"),
  plusImg = document.querySelector("#plusImg"),
  newlistbox = document.querySelector("#newlistbox");

plusImg.addEventListener("click", login);
//editButton.addEventListener("click", edit);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (document.activeElement.id === "plusImg") {
      login(event);
    }
  }
});

async function check() {
  // 조회
  let a = fetch("/login/check", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log(res);
        return res;
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("에 러 발 생 ; ;");
    });

  return a;
}

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

function remove(listInfo) {
  const req = {
    id: i,
  };
  console.log("asdfsdaf");
  // 삭제
  fetch("/login/delete", {
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

function startlist(listInfo) {
  //조회
  let newlistbox = document.getElementById("newlistbox");

  console.log(listInfo.length);
  for (let i = 0; i < listInfo.length; i++) {
    let newElement = document.createElement("div");

    newElement.classList.add("newsmall");

    newElement.innerHTML = `
    <input type="checkbox" id="checkbox" class="checkbox">
    <span class="description">${listInfo[i].description}</span>
    <input type="image" class="editImg" id="" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png" onclick="">
    <input type="image" class="rmImg" id="" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-256.png" onclick="">`;
    newlistbox.prepend(newElement);
    console.log(newElement);
  }
}

function addElement() {
  //추가
  let newlistbox = document.getElementById("newlistbox");
  let newElement = document.createElement("div");

  newElement.classList.add("newsmall");
  newElement.innerHTML = `
    <input type="checkbox" id="checkbox" class="checkbox">
    <span class="description">${description.value}</span>
    <input type="image" class="editImg" id="editImg" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png" onclick="">
    <input type="image" class="rmImg" id="rmImg" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-256.png" onclick="">`;
  // newlist.prepend(document.createTextNode(description.value));
  newlistbox.prepend(newElement);
  // let rmImg = document.querySelector("#rmImg");
  // rmImg.addEventListener("click", remove);

  //newlistbox.style.height = newlist.scrollHeight + "px";

  description.value = "";
  // 입력 필드 초기화
}
