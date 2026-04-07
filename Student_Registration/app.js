const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// ✅ Set view engine
app.set("view engine", "ejs");

// ✅ Use express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layout"); // VERY IMPORTANT (default layout file)

// ✅ Static files (CSS)
app.use(express.static("public"));

// ✅ Body parser (for form data)
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Middleware (logs every request)
app.use((req, res, next) => {
    console.log(req.method + " request for " + req.url + " at " + new Date().toLocaleTimeString());
    next();
});

// ================= ROUTES ================= //

// Home Page
app.get("/", (req, res) => {
    res.render("home");
});

// About Page
app.get("/about", (req, res) => {
    res.render("about");
});

// Register Page
app.get("/register", (req, res) => {
    res.render("register");
});

// Handle Form Submission
app.post("/submit", (req, res) => {
    const { name, email, course, age } = req.body;

    res.render("result", {
        name: name,
        email: email,
        course: course,
        age: age
    });
});

// URL Parameter Example
app.get("/student/:name", (req, res) => {
    const studentName = req.params.name;
    res.send("Welcome " + studentName + " to the Student Portal");
});

// ================= SERVER ================= //

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});