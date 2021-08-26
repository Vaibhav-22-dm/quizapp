import { useState } from 'react'
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [college, setCollege] = useState('')
    const [department, setDepartment] = useState('')
    const [course, setCourse] = useState('')
    const [roll, setRoll] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://vaibhavquizapi.herokuapp.com/api/register/',
        {
            'username':username,
            'password1':password1,
            'password2':password2,
            'email':email,
            'first_name':first_name,
            'last_name':last_name,
            'college':college,
            'department':department,
            'course':course,
            'roll':roll,
        },
        {
            headers:{
                'Content-Type':'application/json',
            }
        }
        )
        .then((res) => {
            console.log(res.data['message'])
            setIsSubmitted(true)
        })
        console.log(username, password1, password2, first_name, last_name, email, college, course, department, roll)
    }

    return (
        <div className="container" style={{
            marginTop: "7vh"
        }}>
            <div className="row justify-content-center">
                <form action="" className="col-10 bg-light p-4 border rounded shadow">

                    <div className="row form-group justify-content-center">
                        <h2 className="text-center text-secondary pb-3">Register To Portal</h2>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Username</label>
                                <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" onChange={(e) => { setUsername(e.target.value) }} value={username}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword1(e.target.value) }} value={password1}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword2">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" onChange={(e) => { setPassword2(e.target.value) }} value={password2}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} value={email}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputRoll1">Roll No.</label>
                                <input type="text" className="form-control" id="exampleInputRoll1" aria-describedby="emailHelp" onChange={(e) => { setRoll(e.target.value) }} value={roll}></input>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputFirstName1">First Name</label>
                                <input type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" onChange={(e) => { setFirst_name(e.target.value) }} value={first_name}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLastName1">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputLastName1" aria-describedby="emailHelp" onChange={(e) => { setLast_name(e.target.value) }} value={last_name}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputCollege1">College</label>
                                <input type="text" className="form-control" id="exampleInputCollege1" aria-describedby="emailHelp" onChange={(e) => { setCollege(e.target.value) }} value={college}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputDepartment1">Department</label>
                                <input type="text" className="form-control" id="exampleInputDepartment1" aria-describedby="emailHelp" onChange={(e) => { setDepartment(e.target.value) }} value={department}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputCourse1">Course</label>
                                <input type="text" className="form-control" id="exampleInputCourse1" aria-describedby="emailHelp" onChange={(e) => { setCourse(e.target.value) }} value={course}></input>
                            </div>
                        </div>
                    </div>

                    <div className="row col-12 form-group justify-content-center">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Register
                        </button>
                        <Link type="submit" className="btn btn-warning mx-2" to='/' >
                            Login
                        </Link>
                    </div>
                    <div>
                        {isSubmitted && 
                            <div className="col-12 alert alert-success mt-2" role="alert" >Registered Successfully</div>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;