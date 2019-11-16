import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



    class homePage extends Component {
        constructor(props) {
            super(props)
            this.state = {
                value: '',
                error: null,
                Student: []
            };
    }

    handleChange = (event) =>
    {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        alert('submitted' + this.state.value);
        event.preventDefault();
        console.log("course name",this.state.value);
        const num = this.state.value;
        console.log(num);
         fetch("http://localhost:4000/coursename/" + num)
             .then(res => res.json())
             .then((result) => {
                 console.log(result[0]) 
                 this.setState({
                    Student: result[0]
                 })
             })

    }
    handleSubmitp = (event) => {
        alert('submitted' + this.state.value);
        event.preventDefault();
        console.log("student name",this.state.value);
        const num = this.state.value;
        console.log(num);
        fetch("http://localhost:4000/studentname/" + num)
        .then(res => res.json())
        .then((resul) => {
            console.log(resul[0])
            this.setState({
                Student: resul[0]
            })
        })
        }

    render (){
        return(
        <div className="container">
            <div className="box"  >
                <label>
                    Enter details
                
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <form onSubmit={this.handleSubmit}>
                
                <input variant="primary" type="submit" value="Enter Course Details"/>
                </form>
            </div>
            <h1>            </h1>
            <div className="box1"  >
                <form onSubmit={this.handleSubmitp}>
                {/* <label>
                    Mobile Number:
                
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label> */}
                <input variant="primary" type="submit" value="Enter Student Details"/>
            </form>
            </div>
            

            {
                this.state.Student ?
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th colSpan="2">Student Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Student Name</td>
                        <td>{this.state.Student.name}</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Student Age</td>
                        <td>{this.state.Student.age}</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >Course ID</td>
                        <td>{this.state.Student.course_id}</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td >Joining Date</td>
                        <td>{this.state.Student.Joining_date}</td>
                        </tr>
                    </tbody>
                    </Table>
                    :
                    <h1>null </h1>
            }
             {/* <div className="box1"  >
            <form onSubmit={this.handleSubmitp}>
                {/* <label>
                    Mobile Number:
                
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label> 
                <input variant="primary" type="submit" value="Patient Details"/>
            </form>
            </div>
            {
                this.state.Student ?
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th colSpan="2">Patient details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Patient ID</td>
                    <td>{this.state.Patient.pt_id}</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Mobile Number</td>
                    <td>{this.state.Patient.mob_number}</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >Registration Date</td>
                    <td>{this.state.Patient.reg_date}</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td >Registration Time</td>
                    <td>{this.state.Patient.reg_time}</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td >Patient Name</td>
                    <td>{this.state.Patient.pt_name}</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td >Gender</td>
                    <td>{this.state.Patient.gender}</td>
                    </tr>
                    <tr>
                    <td>7</td>
                    <td >Age</td>
                    <td>{this.state.Patient.age}</td>
                    </tr>
                    <tr>
                    <td>8</td>
                    <td >Location</td>
                    <td>{this.state.Patient.location}</td>
                    </tr>
                </tbody>
                </Table>
                :
                <h1>null</h1>
            } */}
            
        </div>
        );
    }

}

export default homePage;