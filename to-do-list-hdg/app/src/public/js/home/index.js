let list;

document.addEventListener("DOMContentLoaded", async () => {
  getLists(createContener);
});

function createContener() {
  const contenerDiv = document.querySelector(".contener");

  for (let i = 0; i < list.data.length; i++) {
    const id = list.data[i].id;
    const is_check = list.data[i].is_check;
    const description = list.data[i].description;

    //div add 를 contener에 추가
    let divAdd = document.createElement("div");
    divAdd.setAttribute("id", id);
    divAdd.setAttribute("class", "add");
    contenerDiv.appendChild(divAdd);

    //checkbox를 add 에 생성
    let checkbox = document.createElement("input");
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("type", "checkbox");
    if (is_check) checkbox.setAttribute("checked", true);
    checkbox.addEventListener("click", toggleText);
    divAdd.appendChild(checkbox);

    //text 를 만들기
    let text = document.createElement("span");
    divAdd.appendChild(text);

    //button 만들기
    let divBtn = document.createElement("div");
    divBtn.setAttribute("class", "btn");
    divAdd.appendChild(divBtn);

    //수정
    let updateBtn = document.createElement("button");
    updateBtn.addEventListener("click", update);
    divBtn.appendChild(updateBtn);
    updateBtn.innerHTML = "수정";

    //삭제
    let wasteBtn = document.createElement("button");
    wasteBtn.addEventListener("click", deleteBtn);
    divBtn.appendChild(wasteBtn);
    wasteBtn.innerHTML = "삭제";

    //체크박스 체크됬으면 del 걸기
    if (checkbox.checked) {
      let del = document.createElement("del");
      text.appendChild(del);
      del.innerHTML = `${description}`;
    } else {
      text.innerHTML = `${description}`;
    }
  }
}

async function add(input) {
  if (!input.value) return alert("입력창에 입력하세요");

  const contenerDiv = document.querySelector(".contener");

  //div add 를 contener에 추가
  let divAdd = document.createElement("div");
  divAdd.setAttribute("class", "add");
  contenerDiv.appendChild(divAdd);

  //checkbox를 add 에 생성
  let checkbox = document.createElement("input");
  checkbox.setAttribute("class", "checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", toggleText);
  divAdd.appendChild(checkbox);

  //text 를 만들기
  let text = document.createElement("span");
  divAdd.appendChild(text);
  text.innerHTML = `${input.value}`;

  //button 만들기
  let divBtn = document.createElement("div");
  divBtn.setAttribute("class", "btn");
  divAdd.appendChild(divBtn);

  //수정
  let updateBtn = document.createElement("button");
  updateBtn.addEventListener("click", update);
  divBtn.appendChild(updateBtn);
  updateBtn.innerHTML = "수정";

  //삭제
  let wasteBtn = document.createElement("button");
  wasteBtn.addEventListener("click", deleteBtn);
  divBtn.appendChild(wasteBtn);
  wasteBtn.innerHTML = "삭제";

  //input.value 초기화
  input.value = "";
  console.log(input);

  //post 요청
  let id = await addList(false, text.innerHTML);
  divAdd.setAttribute("id", id);
}

function addList(is_check, description) {
  console.log(is_check, description);
  const req = {
    is_check: is_check,
    description: description,
  };

  return fetch("/lists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) alert(res.msg);
      console.log(res.data.insertId);
      return res.data.insertId;
    })
    .catch((err) => {
      console.error("리스트 추가 중 에러 발생", err);
    });
}

function getLists(func) {
  fetch("/lists")
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) alert(res.msg);
      list = res;
      if (func) func();
    })
    .catch((err) => {
      console.error("리스트 화면 띄우는 중 에러 발생");
    });
}

function updateList(is_check, description, id) {
  const req = {
    is_check: is_check,
    description: description,
  };

  fetch(`/lists/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) alert(res.msg);
    })
    .catch((err) => {
      console.error("리스트 수정 중 에러 발생");
    });
}

function deleteList(id) {
  fetch(`/lists/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) alert(res.msg);
    })
    .catch((err) => {
      console.error("리스트 삭제 중 에러 발생");
    });
}

function toggleText() {
  const parentAdd = this.parentElement;
  const childText = parentAdd.querySelector("span");
  const del = childText.querySelector("del");
  const text = del ? del.innerHTML : childText.innerHTML;

  if (this.checked) {
    console.log("체크됨");
    childText.innerHTML = `<del>${text}</del>`;
  } else {
    console.log("체크안됨");
    childText.innerHTML = `${text}`;
  }

  updateList(this.checked, text, parentAdd.id);
}

function update() {
  const parentAdd = this.parentElement.parentElement;
  const childText = parentAdd.querySelector("span");
  const del = childText.querySelector("del");
  const text = del ? del.innerHTML : childText.innerHTML;

  if (this.innerHTML === "수정") {
    //let update = document.createElement("input");
    //update.setAttribute("value", text);
    //update.appendChild(parentAdd);

    this.innerHTML = "완료";
  } else {
    this.innerHTML = "수정";
  }
}

function deleteBtn() {
  console.log("삭제");
  const parentAdd = this.parentElement.parentElement;
  console.log("삭제", parentAdd.id);
  deleteList(parentAdd.id);
  location.reload(true);
}

function enter(event, input) {
  if (event.key === "Enter") {
    if (!input.value) {
      alert("입력창에 입력하세요");
      return;
    }
    input.blur();
    add(input);
  }
}
