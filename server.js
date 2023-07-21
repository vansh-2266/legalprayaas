const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "blogHome.html"));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.get('/practiceArea', (req, res) => {
    res.sendFile(path.join(initial_path, "practiceArea.html"));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(initial_path, "contact.html"));
})




app.get('/article', (req, res) => {
    res.sendFile(path.join(initial_path, "blogHome.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

//upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    //image name
    let imagename = date.getDate() + date.getTime() + file.name;
    //image upload path
    let path = 'public/uploads/' + imagename; 

    //create upload 
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        }else{
            //our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})


app.get("/adminDash", (req, res) => {
    res.sendFile(path.join(initial_path, "dashboard.html"));
})

app.get('/careerDash', (req, res) => {
    res.sendFile(path.join(initial_path, "careerDash.html"));
})

app.get('/career', (req, res) => {
    res.sendFile(path.join(initial_path, "career.html"));
})


app.get("/:blog", (req, res) =>{
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.get("/:blog/editor", (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})


app.use((req, res) =>{
    res.json("404");
})

app.listen("7000", () => {
    console.log('listening....');
})