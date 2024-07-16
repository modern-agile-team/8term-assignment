let list;

//이부분 수정이 필요함
let img;

const panImage =
  "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/pen-1024.png";

const wasteImage =
  "https://cdn2.iconfinder.com/data/icons/kitchenware-solid-cookery/512/Trash_Can-1024.png";

document.addEventListener("DOMContentLoaded", async () => {
  getLists(createContener);
});

let updateImage = document.createElement("img");
updateImage.setAttribute("src", panImage);
updateImage.setAttribute("class", "pen");
updateBtn.appendChild(updateImage);

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

    //text div 를 만들기
    let textAdd = document.createElement("div");
    textAdd.setAttribute("class", "text");
    divAdd.appendChild(textAdd);

    //text 를 만들기
    let text = document.createElement("span");
    textAdd.appendChild(text);

    //input 만들기
    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("class", "input");
    inp.setAttribute("value", `${description}`);
    inp.addEventListener("keypress", updateEnter);
    textAdd.appendChild(inp);
    inp.style.display = "none";

    //button div 만들기
    let divBtn = document.createElement("div");
    divBtn.setAttribute("class", "btn");
    divAdd.appendChild(divBtn);

    //수정
    let updateBtn = document.createElement("button");
    updateBtn.setAttribute("class", "update");
    updateBtn.addEventListener("click", update);
    divBtn.appendChild(updateBtn);

    //수정 이미지
    let updateImage = document.createElement("img");
    updateImage.setAttribute("src", panImage);
    updateImage.setAttribute("class", "pen");
    updateBtn.appendChild(updateImage);

    //삭제
    let wasteBtn = document.createElement("button");
    wasteBtn.addEventListener("click", deleteBtn);
    divBtn.appendChild(wasteBtn);

    //삭제 이미지
    let deleteImage = document.createElement("img");
    deleteImage.setAttribute("src", wasteImage);
    deleteImage.setAttribute("class", "waste");
    wasteBtn.appendChild(deleteImage);

    //체크박스 체크됬으면 del 걸기
    if (checkbox.checked) {
      let del = document.createElement("del");
      text.appendChild(del);
      del.innerHTML = `${description}`;
      updateBtn.style.display = "none";
    } else {
      text.innerHTML = `${description}`;
      updateBtn.style.display = "block";
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

  //text div 를 만들기
  let textAdd = document.createElement("div");
  textAdd.setAttribute("class", "text");
  divAdd.appendChild(textAdd);

  //text 를 만들기
  let text = document.createElement("span");
  textAdd.appendChild(text);
  text.innerHTML = `${input.value}`;

  //input 만들기
  let inp = document.createElement("input");
  inp.setAttribute("type", "text");
  inp.setAttribute("class", "input");
  inp.setAttribute("value", `${input.value}`);
  inp.addEventListener("keypress", updateEnter);
  textAdd.appendChild(inp);
  inp.style.display = "none";

  //button div 만들기
  let divBtn = document.createElement("div");
  divBtn.setAttribute("class", "btn");
  divAdd.appendChild(divBtn);

  //수정
  let updateBtn = document.createElement("button");
  updateBtn.addEventListener("click", update);
  divBtn.appendChild(updateBtn);

  //수정 이미지
  let updateImage = document.createElement("img");
  updateImage.setAttribute("src", panImage);
  updateImage.setAttribute("class", "pen");
  updateBtn.appendChild(updateImage);

  //삭제
  let wasteBtn = document.createElement("button");
  wasteBtn.addEventListener("click", deleteBtn);
  divBtn.appendChild(wasteBtn);

  //삭제 이미지
  let deleteImage = document.createElement("img");
  deleteImage.setAttribute("src", wasteImage);
  deleteImage.setAttribute("class", "waste");
  wasteBtn.appendChild(deleteImage);

  //input.value 초기화
  input.value = "";

  //post 요청
  let id = await addList(false, text.innerHTML);
  divAdd.setAttribute("id", id);
}

function addList(is_check, description) {
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
  const updateBtn = parentAdd.querySelector(".update");
  const childText = parentAdd.querySelector("span");
  const del = childText.querySelector("del");
  const text = del ? del.innerHTML : childText.innerHTML;

  if (this.checked) {
    updateBtn.style.display = "none";
    childText.innerHTML = `<del>${text}</del>`;
  } else {
    updateBtn.style.display = "block";
    childText.innerHTML = `${text}`;
  }

  updateList(this.checked, text, parentAdd.id);
}

function update() {
  const parentAdd = this.parentElement.parentElement;
  const childText = parentAdd.querySelector(".text").querySelector("span");
  const childInput = parentAdd.querySelector(".text").querySelector("input");
  const checkbox = parentAdd.querySelector(".checkbox");

  //이부분 수정이 필요함
  img = this.querySelector("img") || img;
  console.log(img);

  const del = childText.querySelector("del");
  const text = del ? del.innerHTML : childText.innerHTML;
  if (this.innerHTML === "완료") {
    this.innerHTML = "";
    img.style.display = "block";
    checkbox.disabled = false;
    childText.style.display = "block";
    childInput.style.display = "none";

    if (childInput.value === "") return alert("입력창에 입력하세요");
    if (childInput.value !== text) {
      updateList(checkbox.checked, childInput.value, parentAdd.id);
      location.reload(true);
    }
  } else {
    checkbox.disabled = true;
    childText.style.display = "none";
    childInput.style.display = "block";
    childInput.focus();
    img.style.display = "none";
    this.innerHTML = "완료";
  }
}

function deleteBtn() {
  const parentAdd = this.parentElement.parentElement;
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

function updateEnter(event) {
  const input = event.currentTarget;
  const parentAdd = input.parentElement.parentElement;
  const checkbox = parentAdd.querySelector(".checkbox");
  if (event.key === "Enter") {
    if (!input.value) {
      alert("입력창에 입력하세요");
      return;
    }
    updateList(checkbox.checked, input.value, parentAdd.id);
    location.reload(true);
  }
}

function panImages(updateBtn) {
  //수정 이미지
  let updateImage = document.createElement("img");
  updateImage.setAttribute("src", panImage);
  updateImage.setAttribute("class", "pen");
  updateBtn.appendChild(updateImage);

  return updateImage;
}

function wasteImages(wasteBtn) {
  //삭제 이미지
  let deleteImage = document.createElement("img");
  deleteImage.setAttribute("src", wasteImage);
  deleteImage.setAttribute("class", "waste");
  wasteBtn.appendChild(deleteImage);

  return deleteImage;
}
