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
                                
                                <textarea id = "text${data[i].id}"  value = "" class ="${tmpText} list-textarea" disabled onkeydown="resize(this)">${data[i].description}</textarea>
                                &nbsp; 
                                <button type="button" id="update${data[i].id}" onClick ="editMod(this)" class ="${tmpEdit} button-edit" ></button> &nbsp;
                                <button type ="button" id="delete${data[i].id}"  onClick="deleteList(this.id)" class ="button-delete"></button>
                                <hr class ="list-line"/>
                            </div>
                            `;
    listReSize(`text${data[i].id}`);
  }
}
