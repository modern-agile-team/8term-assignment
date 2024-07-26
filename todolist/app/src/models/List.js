"use strict";

const ListStorage = require("./ListStorage");

class List {
  constructor(body) {
    this.body = body;
  }

  async check() {
    //조회
    const response = await ListStorage.getListInfo();
    return response;
  }

  async login() {
    //추가
    const client = this.body;
    // const { description } = await ListStorage.getListInfo(client.description);
    // 강의에서는 내가 입력한 데이터에 해당하는 id 비밀번호
    // console.log(client.description);
    // console.log(list);

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
    //추가
    const client = this.body;
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
    //수정
    const client = this.body;
    const { description } = await ListStorage.getListInfo(client.description);
    // 강의에서는 내가 입력한 데이터에 해당하는 id 비밀번호

    if (client.description) {
      //입력받은 데이터가 있다면
      this.editsave();
      //데이터베이스에 다시 저장해라
      return { success: true };
    } else {
      // 데이터가 없다면
      return { success: false, msg: "내용을 입력하세요." };
    }
  }

  async editsave() {
    //수정후 저장
    const client = this.body;
    const response = await ListStorage.editsave(client);
    return response;
  }
}

module.exports = List;
