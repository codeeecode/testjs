// //b1. khai báo http module(chạy web)
// const http = require("http");

// const fs = require("fs")

// //b2.khai báo port của web server
// //muốn deploy lên hosting (heroku)
// // thí cần phải set port với process.env.PORT
// const port = process.env.PORT || 5000;
// //b3. tạo web server , set header + code , thêm nội dung cho web
// const app = http.createServer((request, response) => {

//     response.statusCode = 200; //HTTP_OK
//     response.setHeader("Content-Type", "text/html");

//     if (req.url === "/") {
//         fs.readFile("./index.html", (err, data) => {
//             if (err) {
//                 console.error(err)
//             } else {
//                 response.write(data);
//                 response.end()
//             }

//         });
//     } else if (req.url === "/clodu") {
//         fs.readFile("./clodu.html", (err, data) => {
//             if (err) {
//                 console.error(err)

//             } else {
//                 response.write(data)
//                 response.end()
//             }
//         })

//     }
// });
// //b4.chạy web bằng cách listen port
// //note console.log ko cat cuoc
// app.listen(port, () => {
//     console.log("524")

// });

const http = require("http");
const fs = require("fs");
http
    .createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        if (req.url === "/") {
            fs.readFile("./index.html", (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    res.write(data);
                    res.end;
                }
            });
        } else if (req.url === "/greenwich") {
            fs.readFile("./greenwich.html", (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.write(data);
                    res.end;
                }
            });
        } else if (req.url === "/cloud") {
            fs.readFile("./cloud.html", (err, data) => {
                res.write(data);
                res.end;
            });
        } else {
            res.end("<h1>404 : Page not found</h1>");
        }
    })
    .listen(process.env.PORT || 3000);