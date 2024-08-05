"use strict";
window.onload = async function () {
  let listInfo = await check();
  startlist(listInfo);
};

const description = document.querySelector("#description"),
  plusImg = document.querySelector("#plusImg"),
  newlistbox = document.querySelector("#newlistbox");

plusImg.addEventListener("click", login);

function login() {
  // 생성 요청
  const req = {
    description: description.value,
  };

  fetch("/login", {
    // 생성 요청
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res) {
        console.log(res);
        addElement(res);
      } else {
        alert("내용을 입력하세요.");
      }
    })
    .catch((err) => {
      console.error("에 러 발 생 ; ;");
    });
}

async function check() {
  // 조회 요청
  let listsInfo = fetch("/login/check", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log(res);
        console.log("조회 성공");
        return res;
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("에 러 발 생 ; ;");
    });

  return listsInfo;
}

function edit(elementInfo) {
  // 수정 요청
  const req = {
    id: elementInfo.id,
    description: elementInfo.querySelector("span").textContent,
  };

  fetch("/login/edit", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log(req);
        //그대로 저장하는 기능
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("에 러 발 생 ; ;");
    });
}

async function remove(listInfo) {
  // 삭제 요청
  // const req = await check();
  console.log(listInfo.id);
  const req = {
    id: listInfo.id,
  };

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
        // removeElement(listInfo);
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
  // 조회 -> 서버 접속 시 기존 정보들을 보여줌
  let newlistbox = document.getElementById("newlistbox");

  for (let i = 0; i < listInfo.length; i++) {
    let newElement = document.createElement("div");

    newElement.classList.add("newsmall");
    newElement.id = listInfo[i].id;

    newElement.innerHTML = `
    <input type="checkbox" id="ch${
      listInfo[i].id
    }" class="checkbox" onchange="checkBoxLine('${listInfo[i].id}')">
    <span class="description" id="description${listInfo[i].id}">${
      listInfo[i].description
    }</span>
    <button class="editBtn" id="${
      "edit" + listInfo[i].id
    }" onclick="editElement(${listInfo[i].id})">
    <img class="editImg" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png" alt="Edit">

    <button class="rmBtn" id="${
      "rm" + listInfo[i].id
    }" onclick="removeElement(${listInfo[i].id})">
    <img class="rmImg" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-256.png" alt="Remove">
    </button>`;

    newlistbox.prepend(newElement);
  }
}

function addElement(listInfo) {
  // 추가 -> 추가 버튼을 누르면 div 생성
  let newlistbox = document.getElementById("newlistbox");
  let newElement = document.createElement("div");

  console.log(listInfo);
  newElement.classList.add("newsmall");
  newElement.id = listInfo.insertId;

  newElement.innerHTML = `
    <input type="checkbox" id="ch${listInfo.insertId}" class="checkbox">
    <span class="description" id="description${listInfo.insertId}">${description.value}</span>
    <button class="editBtn" id="edit${listInfo.insertId}" onclick="editElement(${listInfo.insertId})">
    <img class="editImg" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png" alt="Edit">
    <button class="rmBtn" id="" onclick="removeElement(${listInfo.insertId})">
    <img class="rmImg" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-256.png" alt="Remove">
    </button>`;
  newlistbox.prepend(newElement);
  // let rmImg = document.querySelector("#rmImg");
  // rmImg.addEventListener("click", remove);

  description.value = "";
  // 입력 필드 초기화
}

function removeElement(elementId) {
  // 삭제 -> 삭제 버튼을 누르면 remove 함수 실행
  console.log(elementId);
  const removeElement = document.getElementById(elementId);
  removeElement.remove();
  remove(removeElement);
}

function editElement(elementId) {
  // 수정 -> 수정 버튼을 누르면 저장 글자로 바뀌고 내용 수정
  const element = document.getElementById(`${elementId}`);
  const description = element.querySelector(`#description${elementId}`);
  let editImg = element.querySelector(`#edit${elementId}`);

  let currentText = description.textContent;

  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = currentText;
  inputField.id = `description${elementId}`;
  inputField.className = "description";

  element.replaceChild(inputField, description);
  // span을 input으로

  editImg.innerHTML = `저장`;
  editImg.onclick = () => saveEdit(elementId);
}

function saveEdit(elementId) {
  // 저장 버튼을 누르면 수정 이미지로 바뀜
  const element = document.getElementById(`${elementId}`);
  const inputField = element.querySelector(`#description${elementId}`);
  let editImg = element.querySelector(`#edit${elementId}`);

  const newText = inputField.value;

  const spanField = document.createElement("span");
  spanField.className = "description";
  spanField.id = "description";
  spanField.textContent = newText;

  element.replaceChild(spanField, inputField);
  // input을 span으로

  edit(element);

  editImg.innerHTML = `<img class="editImg" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png" alt="Edit">`;
  editImg.onclick = () => editElement(elementId);
}

function checkBoxLine(elementId) {
  const checkbox = document.getElementById(`ch${elementId}`);
  const description = document.getElementById(`description${elementId}`);
  if (checkbox.checked) {
    description.classList.add("line");
    // edit(checkbox.checked);
  } else {
    description.classList.remove("line");
    // edit(checkbox.checked);
  }
}
