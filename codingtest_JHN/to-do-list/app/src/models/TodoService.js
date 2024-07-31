"use strict";
const { response } = require("../../app");
//storage의 기능들을 호출하여 todo항목들 불러오는 역할(서비스 기능을 수행)

const todoStorage = require("./TodoStorage"); //

class TodoService {
  //body ---> req!! 생성자.....잘다뤄야한다//////////
  constructor(req) {
    this.content = req?.content || "";
    this.newContent = req?.newContent || "";
    this.listno = req?.listno || "";
  }

  async todolist() {
    //비동기 메서드 todolist
    const content = this.content;

    try {
      const response = await todoStorage.save(content);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async showtodo() {
    try {
      const todos = await todoStorage.load();
      return { success: true, todos };
    } catch (err) {
      return { success: false, err };
    }
  }

  async delete(listno) {
    try {
      // console.log(listno);
      const response = await todoStorage.delete(listno);
      return { success: true, response };
    } catch (err) {
      return { success: false, err };
    }
  }

  async update(listno, newContent) {
    try {
      const response = await todoStorage.update(listno, newContent);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = TodoService;
