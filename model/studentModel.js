const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    name: {type: String, required: true},
    age : {type: Number, required: true},
    Joining_date: {type: Date, required: true},
    course_id:{type: String, required: true},
    
    //  boool
  

})

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student