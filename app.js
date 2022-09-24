//b1. khai báo http module(chạy web)
const http = require("http");
//b2.khai báo port của web server
//muốn deploy lên hosting (heroku)
// thí cần phải set port với process.env.PORT
const port = process.env.PORT || 5000;
//b3. tạo web server , set header + code , thêm nội dung cho web
const app = http.createServer((request, response) => {
    response.statusCode = 200; //HTTP_OK
    response.setHeader("Content-Type", "text/html");
    response.write("hello everybody");
    response.write("<h1>minh 123</h1>")
    response.write("<imgs src='https://anhdephd.vn/wp-content/uploads/2022/04/anh-doremon-2.jpg'>")
        // response.write( < iframe width = "560"
        //     height = "315"
        //     src = "https://www.youtube.com/embed/40v-5XQVPvY"
        //     title = "YouTube video player"
        //     frameborder = "0"
        //     allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen ></iframe>)
        //     response.write("video")
    response.write("current information")

    response.end()
});
//b4.chạy web bằng cách listen port
//note console.log ko cat cuoc
app.listen(port, () => {
    console.log("524")

});