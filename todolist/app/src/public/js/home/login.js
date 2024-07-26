"use strict";
window.onload = async function () {
  let listInfo = await check();
  startlist(listInfo);
};

const description = document.querySelector("#description"),
  plusImg = document.querySelector("#plusImg"),
  newlistbox = document.querySelector("#newlistbox");
// rmImg = document.getElementById(`${listInfo[i].id}`);

plusImg.addEventListener("click", login);
// rmImg.addEventListener("click", remove);
//editButton.addEventListener("click", edit);

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     if (document.activeElement.id === "plusImg") {
//       login(event);
//     }
//   }
// });

async function check() {
  // 조회
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
      if (res) {
        addElement(res);
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("에 러 발 생 ; ;");
    });
}

// function edit() {
//   const req = {
//     description: description.value,
//   };

//   fetch("/login", {
//     // 수정
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(req),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.success) {
//         console.log(description.value);
//         //그대로 저장하는 기능
//       } else {
//         alert(res.msg);
//       }
//     })
//     .catch((err) => {
//       console.error("에 러 발 생 ; ;");
//     });
// }

async function remove(listInfo) {
  // 삭제
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
  //조회
  let newlistbox = document.getElementById("newlistbox");

  for (let i = 0; i < listInfo.length; i++) {
    let newElement = document.createElement("div");

    newElement.classList.add("newsmall");
    newElement.id = listInfo[i].id;

    newElement.innerHTML = `
    <input type="checkbox" id="checkbox" class="checkbox">
    <span class="description">${listInfo[i].description}</span>
    <input type="image" class="editImg" id="" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png" onclick="">
    <button class="rmbtn" id="" onclick="removeElement(${listInfo[i].id})">
    <img class="rmImg" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-256.png" alt="Remove">
    </button>`;
    newlistbox.prepend(newElement);
  }
}

function addElement(listInfo) {
  //추가
  let newlistbox = document.getElementById("newlistbox");
  let newElement = document.createElement("div");
  console.log(listInfo);

  newElement.classList.add("newsmall");
  newElement.id = listInfo.Id;

  newElement.innerHTML = `
    <input type="checkbox" id="checkbox" class="checkbox">
    <span class="description">${description.value}</span>
    <input type="image" class="editImg" id="editImg" src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png" onclick="">
    <button class="rmbtn" id="" onclick="removeElement(${listInfo.Id})">
    <img class="rmImg" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-256.png" alt="Remove">
    </button>`;
  newlistbox.prepend(newElement);
  // let rmImg = document.querySelector("#rmImg");
  // rmImg.addEventListener("click", remove);

  description.value = "";
  // 입력 필드 초기화
}

function removeElement(ElementId) {
  console.log(ElementId);
  const removeElement = document.getElementById(ElementId);
  removeElement.remove();
  remove(removeElement);
}
