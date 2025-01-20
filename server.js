//import express module
const express = require("express");
const { console } = require("inspector");

const app = express();
const logger = ((req, res, next) => {
    console.log("Time:", new Date().getFullYear());
    next();
});
const path = require("path");
const { send } = require("process");
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));


app.use(logger);
app.use(express.static("public"));
// urlencode (midallware for /adduser)
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.get("/", (req, res) => {
//     res.send("Hello World123");
// });
app.listen(3000);
app.get("/user/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
  
    res.render("index", {userID: id, userName: name});
});

app.get('/student', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    

    res.send(`Hello Students ${firstname} ${lastname}`);
});

app.get("/adduser", (req, res) => {
    res.render("user");
});
app.post("/user", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    if (!firstname || !lastname) {
        res.status(400).send("Please enter both firstname and lastname");
        return;
    }
    // console.log(`user has been created${firstname} ${lastname}`);
    res.status(201).send(`user has been created: ${firstname} ${lastname}`);
 
});










// app.delete("/user", (req, res) => {
//     res.send('got a delete request at /user');
// });

// app.post("/post", (req, res) => {
//     res.send("Got a POST request");
// });
// app.put("/user", (req, res) => {
//     res.send("Got a PUT request at /user");
// });
// 10/01/2025
// app.use((req, res, next) => {
//     console.log("Time:", new Date().getMonth()+1.);
//     next();
// });
// app.get("/todo", (req, res) => {
//     res.status(200);
//     res.json({
//         todo: [
//             {
//                 id: 1, title: "eat dinner", completed: false,
//             },
//             {
//                 id: 2, title: "drink water", completed: true,
//             }
//         ]
//     });
// });

// middleware


app.get("/students", (req, res) => {
    res.send("Hello Students");
});
