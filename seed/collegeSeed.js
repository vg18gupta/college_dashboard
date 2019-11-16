const Course = require('../model/courseModel');
const Student = require('../model/StudentModel');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/College',(err) => {
    console.log("err", err)
    const Courses = [
        new Course({
            course_Name : "M.sc(Physics)" ,
            teacher_Name: "Mr. Ramesh P.  ",
            course_Credit: 4,
            course_id:"P001",
        }),
        new Course({
            course_Name : "B.sc(Chemistry)" ,
            teacher_Name: "Mr. K. shah  ",
            course_Credit: 3,
            course_id:"P002",
        }),
        new Course({
            course_Name : "B.sc(Maths)" ,
            teacher_Name: "Mr. Suresh Ram  ",
            course_Credit: 4,
            course_id:"P003",
        }),
        new Course({
            course_Name : "M.sc(Biology)" ,
            teacher_Name: "Mr. Ram Swami  ",
            course_Credit: 4,
            course_id:"P004",
        }),
        new Course({
            course_Name : "B.tech(ECE)" ,
            teacher_Name: "Mr. Rakesh Prashad  ",
            course_Credit: 4,
            course_id:"P005",
        })
        
    ];
    
    for (var i = 0; i<Courses.length; i++){
        Courses[i].save();
    }
    
    const Students = [
        new Student({
            name: "Raju",
            age : 23,
            Joining_date: new Date(2016,10,11) ,
            course_id:"P001"
        }),
        new Student({
            name: "kamal",
            age :  24,
            Joining_date: new Date(2015,09,17) ,
            course_id:"P002"
        }),
        new Student({
            name: "kamlesh",
            age :  23,
            Joining_date: new Date(2016,09,17) ,
            course_id:"P002"
        }),
        new Student({
            name: "Rakesh",
            age :  23,
            Joining_date: new Date(2017,04,23) ,
            course_id:"P003"
        }),
        new Student({
            name: "Anjana",
            age : 21,
            Joining_date: new Date(2016,02,11) ,
            course_id:"P004"
        }),
        new Student({
            name: "jignesh",
            age : 27,
            Joining_date: new Date(2011,04,11) ,
            course_id:"P005"
        })
    ];
    
    for (var i = 0; i<Students.length; i++){
        Students[i].save();
    }
});



