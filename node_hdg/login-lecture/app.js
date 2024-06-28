const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        요기는 루트 입니다!
      </body>
    </html>
  `);
});

app.get("/login", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <input type="text" placeholder="아이디"/><br />
        <input type="text" placeholder="비밀번호"/><br />
        <button>로그인</button>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("서버가동");
});
