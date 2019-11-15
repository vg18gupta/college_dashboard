const Course = require('../model/courseModel');
const Student = require('../model/StudentModel');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Course',(err) => {
    console.log("err", err)
    const Courses = [
        new Course({
            course_Name : "Physics" ,
            teacher_Name: "Mr. Ramesh P.  ",
            course_Credit:"4",
            course_id:"P001",
        }),
        new Course({
            course_Name : "Chemistry" ,
            teacher_Name: "Mr. K. shah  ",
            course_Credit:"3",
            course_id:"P002",
        }),
        new Course({
            course_Name : "Maths" ,
            teacher_Name: "Mr. Suresh Ram  ",
            course_Credit:"4",
            course_id:"P003",
        }),
        new Course({
            course_Name : "Biology" ,
            teacher_Name: "Mr. Ram Swami  ",
            course_Credit:"4",
            course_id:"P004",
        }),
        new Course({
            course_Name : "DS & A" ,
            teacher_Name: "Mr. Rakesh Prashad  ",
            course_Credit:"4",
            course_id:"P005",
        })
        
    ];
    
    for (var i = 0; i<Courses.length; i++){
        Courses[i].save();
    }
    
    const Students = [
        new Student({
            name: "Raju",
            age : "23",
            course_id:"P001"
        }),
        new Student({
            name: "kamal",
            age : "25",
            course_id:"P002"
        }),
        new Student({
            name: "Rakesh",
            age : "24",
            course_id:"P003"
        }),
        new Student({
            name: "Anjana",
            age : "23",
            course_id:"P004"
        }),
        new Student({
            name: "jignesh",
            age : "23",
            course_id:"P005"
        })
    ];
    
    for (var i = 0; i<Students.length; i++){
        Students[i].save();
    }
});



