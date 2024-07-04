document.addEventListener("DOMContentLoaded", loadList);
function loadList() {
  fetch("/lists", {
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
    let tmpText = data[i].is_check ? "" : "Cancellation-line";
    let tmpCheck = data[i].is_check ? "" : "checked";
    let tmpEdit = data[i].is_check ? "" : "edit-hidden";
    todolist.innerHTML += ` <div id ="${data[i].id}" class = "div">
                                <input type="checkbox" id="checkbox${data[i].id}" onClick="updateCheck(this)" ${tmpCheck}
                                />
                                <label for="checkbox${data[i].id}"></label>
                                <input type = "text" id = "text${data[i].id}" value = "${data[i].description}" class ="${tmpText} input1 list-text" disabled></>
                                &nbsp; 
                                <button type="button" id="update${data[i].id}" onClick ="editMod(this)" class ="${tmpEdit} edit-button" ></button> &nbsp;
                                <button type ="button" id="delete${data[i].id}"  onClick="deleteList(this.id)" class ="delete-button"></button>
                                <hr class ="list-line"/>
                            </div>
                            `;
  }
}

function editMod(val) {
  const thisId = val.id.match(/\d+/)[0];

  const inputText = document.querySelector(`#text${thisId}`);
  const textValue = inputText.value;
  inputText.removeAttribute("disabled"); //입력가능하게 만들기
  inputText.focus();
  inputText.value = "";
  inputText.value = textValue;
  val.setAttribute("class", "save-button");
  val.setAttribute("onClick", `updateText(getValue(${thisId}))`); //수정버튼의 onClick이벤트를 readMod함수로 연결
  val.innerText = "확인";
}

function getValue(thisId) {
  console.log(thisId);
  const value = document.querySelector(`#text${thisId}`).value;
  return { id: thisId, value: value };
}
