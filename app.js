//b1. khai báo http module(chạy web)
const http = require("http");
//b2.khai báo port của web server
//muốn deploy lên hosting (heroku)
// thí cần phải set port với process.env.PORT
const port = process.env.PORT || 3000;
//b3. tạo web server , set header + code , thêm nội dung cho web
const app = http.createServer((request, response) => {
    response.statusCode = 200; //HTTP_OK
    response.setHeader("Content-Type", "text/html");
    response.write("hello everybody");
    response.end()
});
//b4.chạy web bằng cách listen port
//note console.log ko cat cuoc
app.listen(port, () => {
    console.log("server is running")

});