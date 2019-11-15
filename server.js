const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Course = require('./model/courseModel')
const Student = require('./model/studentModel')
const {serverError}  = require('./util/error')

const router = require('express').Router();

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/coursename/:cname", (req, res)=>{
    // console.log("hit")
    // res.json("hello");
    let{ cname } = req.params
    console.log(cname);
    Course.find({course_Name: cname})
        .then(course => {
           console.log("dsds",course)
            if(!course){
                res.status(200).json({
                    message: "No patient Found"
                      })
            }else {
                //res.status(200).json(Patient)
                console.log("efWF",course[0].course_id)
                Student.find({course_id: course[0].course_id})
                .then(student=>{
                    console.log("addf",student)
                    if(!student){
                        res.status(200).json({
                            message: "not found"
                        })
                    }
                    else{
                        res.status(200).json(student);
                    }
                })     
            }
            })
        .catch(error => serverError(res, error))
});

app.get("/studentname/:sname", (req, res)=>{
    // console.log("hit")
    // res.json("hello");
    let{ sname } = req.params
    console.log(sname);
    Student.find({name: sname})
        .then(student => {
          console.log("abcd",student)
            if(!student){
                res.status(200).json({
                    message: "No patient Found"
                      })
            }else {
                res.status(200).json(student)
                console.log("efWF",student)
               
            }
            })
        .catch(error => serverError(res, error))
});







app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Our Application'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`SERVER is RUNNING ON PORT ${PORT}`)  
    mongoose.connect('mongodb://localhost:27017/Course',
        { useNewUrlParser: true },
        () => {
        console.log('Database Connected...')
    });
})
