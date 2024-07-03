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
    let tmpText = data[i].is_check ? "" : "Cancellation-line";

    todolist.innerHTML += ` <sapn id ="${data[i].id}" class ="">
                                <input type="checkbox" id="checkbox${data[i].id}" onClick="updateCheck(this)"
                                ${tmpCheck}/>
                                <input type = "text" id = "text${data[i].id}" value = "${data[i].description}" class ="${tmpText} input1 list-text" disabled></>
                                &nbsp; 
                                <button type="button" id="update${data[i].id}" onClick ="editMod(this)" class ="edit-button" ></button> &nbsp;
                                <button type ="button" id="delete${data[i].id}"  onClick="deleteList(this.id)" class ="delete-button"></button>
                                <hr class ="underline"/>
                            </sapn>
                            `;
  }
}

function editMod(val) {
  thisId = val.id.match(/\d+/)[0];
  const inputText = document.querySelector(`#text${thisId}`);
  inputText.removeAttribute("disabled"); //입력가능하게 만들기
  val.setAttribute("class", "");

  val.setAttribute("onClick", `updateText(getValue(${thisId}))`); //수정버튼의 onClick이벤트를 readMod함수로 연결
  val.innerText = "확인";
}

function getValue(thisId) {
  const value = document.querySelector(`#text${thisId}`).value;
  return { id: thisId, value: value };
}
