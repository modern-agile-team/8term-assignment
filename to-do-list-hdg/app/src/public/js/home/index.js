let list;

const panImage =
  "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/pen-1024.png";

const wasteImage =
  "https://cdn2.iconfinder.com/data/icons/kitchenware-solid-cookery/512/Trash_Can-1024.png";

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

    //text div 를 만들기
    let textAdd = document.createElement("div");
    textAdd.setAttribute("class", "text");
    divAdd.appendChild(textAdd);

    //text 를 만들기
    let text = document.createElement("textarea");
    text.setAttribute("disabled", true);
    text.addEventListener("keypress", updateEnter);
    text.addEventListener("input", autoResize);
    textAdd.appendChild(text);
    text.innerHTML = `${description}`;
    text.style.height = "auto";
    text.style.height = `${text.scrollHeight}px`;
    console.log(text.scrollHeight);

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

    //수정 완료
    let completion = document.createElement("span");
    updateBtn.appendChild(completion);
    completion.innerHTML = "완료";
    completion.style.display = "none";

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
      updateBtn.style.display = "none";
      text.style.textDecoration = "line-through";
      text.style.color = "#797979";
    } else {
      text.style.textDecoration = "none";
      text.style.color = "#545454";
    }

    //textarea 크기
    resize(text);
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
  let text = document.createElement("textarea");
  text.setAttribute("disabled", true);
  textAdd.appendChild(text);
  text.addEventListener("keypress", updateEnter);
  text.addEventListener("input", autoResize);
  text.innerHTML = `${input.value}`;
  text.style.height = "auto";
  text.style.height = `${text.scrollHeight}px`;
  console.log(text.scrollHeight);

  //button div 만들기
  let divBtn = document.createElement("div");
  divBtn.setAttribute("class", "btn");
  divAdd.appendChild(divBtn);

  //수정
  let updateBtn = document.createElement("button");
  updateBtn.addEventListener("click", update);
  updateBtn.setAttribute("class", "update");
  divBtn.appendChild(updateBtn);

  //수정 이미지
  let updateImage = document.createElement("img");
  updateImage.setAttribute("src", panImage);
  updateImage.setAttribute("class", "pen");
  updateBtn.appendChild(updateImage);

  //수정 완료
  let completion = document.createElement("span");
  updateBtn.appendChild(completion);
  completion.innerHTML = "완료";
  completion.style.display = "none";

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

  //textarea 크기 맞추기
  resize(text);
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
  console.log("업뎃", is_check);
  console.log("업뎃", description);
  console.log("업뎃", id);
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
  const childText = parentAdd.querySelector("textarea");

  if (this.checked) {
    updateBtn.style.display = "none";
    childText.style.textDecoration = "line-through";
    childText.style.color = "#797979";
  } else {
    updateBtn.style.display = "block";
    childText.style.textDecoration = "none";
    childText.style.color = "#545454";
  }
  console.log(childText.value);
  updateList(this.checked, childText.value, parentAdd.id);
}

function update() {
  const parentAdd = this.parentElement.parentElement;
  const childText = parentAdd.querySelector(".text").querySelector("textarea");
  const checkbox = parentAdd.querySelector(".checkbox");
  const updateImage = this.querySelector(".pen");
  const completion = this.querySelector("span");

  if (completion.style.display === "none") {
    checkbox.disabled = true;
    childText.disabled = false;
    childText.focus();
    childText.selectionStart = childText.selectionEnd = childText.value.length;
    updateImage.style.display = "none";
    completion.style.display = "block";
  } else {
    checkbox.disabled = false;
    childText.disabled = true;
    updateImage.style.display = "block";
    completion.style.display = "none";

    if (childText.value === "") return alert("입력창에 입력하세요");
    updateList(checkbox.checked, childText.value, parentAdd.id);
    location.reload(true);
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

function resize(input) {
  console.log("사이즈 바뀜");
  input.style.height = "auto";
  input.style.height = input.scrollHeight + "px";
  input.parentElement.style.height = input.scrollHeight + "px";
  input.parentElement.parentElement.style.height = input.scrollHeight + "px";
}

function autoResize(event) {
  const input = event.currentTarget;
  resize(input);
}
