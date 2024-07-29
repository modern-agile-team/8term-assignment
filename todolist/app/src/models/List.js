"use strict";

const ListStorage = require("./ListStorage");

class List {
  constructor(body) {
    this.body = body;
  }

  async check() {
    // 조회
    const response = await ListStorage.getListInfo();
    return response;
  }

  async login() {
    // 추가
    const client = this.body;

    if (client.description) {
      // 입력받은 데이터가 있다면
      const response = this.register();
      // 데이터베이스에 추가해라
      return response;
    } else {
      // 데이터가 없다면
      return { success: false, msg: "내용을 입력하세요." };
    }
  }

  async register() {
    // 추가
    const client = this.body;
    console.log(client);
    const response = await ListStorage.save(client);
    return response;
  }

  async delete() {
    //삭제
    const client = this.body;
    const response = await ListStorage.delete(client);
    return response;
  }

  async edit() {
    // 수정
    const client = this.body;
    console.log(client);
    if (client.description) {
      // 입력받은 데이터가 있다면
      this.editsave();
      // 데이터베이스에 다시 저장해라
      return { success: true };
    } else {
      // 데이터가 없다면
      return { success: false, msg: "내용을 입력하세요." };
    }
  }

  async editsave() {
    // 수정 후 저장
    const client = this.body;
    const response = await ListStorage.editsave(client);
    return response;
  }
}

module.exports = List;
