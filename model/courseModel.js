const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CourseSchema = new Schema({
    course_Name : {type: String, required: true},
    teacher_Name: {type: String, required: true},
    course_Credit:{type: String, required: true},
    course_id:{type: String, required: true},



  

})


const Course = mongoose.model('Course', CourseSchema)
module.exports = Course

