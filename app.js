const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');
const path =require('path');
const cors= require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));
const connection=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Raju@3659',
    database:'clone'
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // 'uploads/' is the directory where the files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Name files uniquely with a timestamp
    }
});
const upload = multer({ storage: storage });

app.get('/',(req,res)=>{
    res.send("Hello");
})
app.get('/posts',(req,res)=>{
    const key = 'select * from post_data where DATE(uploaded_at)=CURDATE()';
    connection.query(key,(error,results)=>{
        if(error){
            console.log(err);
        }
        res.json(results);
    });
    
})
app.post('/postdata',upload.single('img_file'),(req,res)=>{
    const { post_name, description } = req.body;
    const file = req.file; // Access the uploaded file via req.file

    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    // File metadata
    const file_name = file.filename;
    const file_type = file.mimetype;
    const file_size = file.size;
    const file_path = file.path; // File's path on the server
    const uploaded_at = new Date();
    const sql = 'INSERT INTO post_data (post_name, description, file_name,file_type,file_size,file_path,uploaded_at) VALUES (?, ?, ?,?,?,?,?)';
    connection.query(sql,[post_name,description,file_name,file_type,file_size,file_path,uploaded_at],(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log("successfully uploaded");
    });
})
app.listen(8000,()=>{
    console.log("server running at port 8000");
})