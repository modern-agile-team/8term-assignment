"use strict";

document.addEventListener("DOMContentLoaded", loadList);

function loadList() {
  fetch("load", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        printList(res.data);
      }
    });
}

function printList(data) {
  const todolist = document.querySelector("#todolist");

  for (let i = 0; i < data.length; i++) {
    let tmpCheck = data[i].is_check ? "" : "checked";
    // let tmpText = data[i].is_check
    //   ? `${data[i].description}`
    //   : `줄긋기 --${data[i].description}`;
    todolist.innerHTML += ` 
                            <td>
                                <input type="checkbox" id="${data[i].id}" onClick="updateCheck(this)"
                                ${tmpCheck}/>
                                <input type = "text" id = "text${data[i].id}" value = "${data[i].description}" disabled></>
                                <a id="${data[i].id}" name ="update" onClick ="editMod(this)">[수정]</a>
                                <a id="${data[i].id}" name="delete" onClick="deleteList(this.id)">
                                [삭제]</a>
                                <hr/>
                            </td>
                            `;
  }
}
function editMod(val) {
  const inputText = document.querySelector(`#text${val.id}`);
  inputText.removeAttribute("disabled"); //입력가능하게 만들기
  val.setAttribute("onClick", `updateText(getValue(${val.id}))`); //수정버튼의 onClick이벤트를 readMod함수로 연결
  val.innerText = "확인";
}
function getValue(val) {
  const id = val;
  const value = document.querySelector(`#text${id}`).value;
  return { id: id, value: value };
}
