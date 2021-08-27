import { useState } from 'react'
import { useParams, useLocation } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Dashboard = () => {
    var [tests, setTests] = useState(null)
    const [isFetched, setIsFetched] = useState(false)
    // const { token } = useParams()
    const [username, setUsername] = useState(null)
    const [first_name, setFirstName] = useState(null)
    const [last_name, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [college, setCollege] = useState(null)
    const [department, setDepartment] = useState(null)
    const [course, setCourse] = useState(null)
    const [roll, setRoll] = useState(null)
    const token = localStorage.getItem('token')

    if (tests == null) {
        axios.get('https://vaibhavquizapi.herokuapp.com/api/testList/',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                }
            }
        )
            .then(res => {
                setTests(res.data)
                setIsFetched(true)
            })

    }

    if (username == null) {
        axios.get('https://vaibhavquizapi.herokuapp.com/api/student/' + token,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                }
            }
        )
            .then(res => {
                setUsername(res.data['username'])
                setFirstName(res.data['first_name'])
                setLastName(res.data['last_name'])
                setEmail(res.data['email'])
                setCollege(res.data['college'])
                setDepartment(res.data['department'])
                setCourse(res.data['course'])
                setRoll(res.data['roll'])
            })
    }

    if (isFetched) {
        setIsFetched(false)
    }

    const logout = () => {
        console.log('logged out')
        localStorage.removeItem('token')
        window.location.href = 'https://vaibhav-22-dm.github.io/quizapp/'
    }

    if(token==null){
        return (
            <div className="p-3">
                <div>You are not authorised to view this page.</div>
                <div>Please Click on Login To log in to the portal</div>
                <Link to="/">Login</Link>
            </div>
        )
    }
    else{
    return ( 
        <div className="container py-3 border rounded shadow bg-light"
        style={{
            margin: "auto",
            marginTop:"5vh"
        }}
        >
            <div className="row">
                <div className="col-3">
                    <div className="container border rounded bg-white py-2">
                        <div className="row profile justify-content-center">
                            <div className="col-12 text-center">
                                <img src="https://cap.ecell-iitkgp.org/img/img/img_avatar_eRiBJfo.png" alt="" className="rounded-circle pt-2" width="100"/>
                            </div>
                            {username && <h4 className="col-12 text-center pt-2">{username}</h4>}
                            {first_name && <div className="col-12 pt-2">{first_name} {last_name}</div>}
                            {roll && <div className="col-12 pt-2">Roll No. {roll}</div>}
                            {college && <div className="col-12 pt-2">{college}</div>}
                            {department && <div className="col-12 pt-2">{department}</div>}
                            {course && <div className="col-12 pt-2">{course}</div>}
                            <div className="col-12">
                                <button className="btn btn-info" onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="container">
                        <div className="row">
                            <h2 className="col-12 py-2 border rounded text-center bg-white">Current Stats</h2>
                        </div>
                        <div className="row justify-content-between pb-2">
                            <div className="col-4 pl-0">
                                <div className="col-12 border rounded p-2 bg-primary text-light">
                                    <h1 className="text-center">9</h1>
                                    <p className="text-center">Attempted Test</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="col-12 border rounded p-2 bg-warning text-light">
                                    <h1 className="text-center">90%</h1>
                                    <p className="text-center">Average Score</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0">
                                <div className="col-12  border rounded p-2 bg-success text-light">
                                    <h1 className="text-center">97%</h1>
                                    <p className="text-center">Highest Score</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h2 className="col-12 py-2 border rounded text-center bg-white">Upcoming Tests</h2>
                        </div>
                        <div className="row py-2">
                            {tests && tests.map((test) => 
                                <div className="col-3 pl-0" key={test.id}>
                                    <div className="col-12 border rounded p-2 bg-skyblue">
                                        <h4>{test.title}</h4>
                                        {test.subject=='P' && <div>Physics</div>}
                                        {test.subject=='C' && <div>Chemistry</div>}
                                        {test.subject=='M' && <div>Mathematics</div>}
                                        {test.subject=='B' && <div>Biology</div>}
                                        <div>{test.time} minutes</div>
                                        <Link className="btn btn-info mt-3" to={`/quizapp/quiz/${test.id}`}>Start</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="row">
                            <h2 className="col-12 py-2 border rounded text-center bg-white">Previous Tests</h2>
                        </div>
                        <div className="row py-2">
                                <div className="col-3 pl-0">
                                    <div className="col-12 border rounded p-2 bg-lightgray">
                                        <h4>Test Title</h4>
                                        <p>Subject</p>
                                        <p>Total Marks</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="col-12 border rounded p-2 bg-lightgray">
                                        <h4>Test Title</h4>
                                        <p>Subject</p>
                                        <p>Total Marks</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="col-12 border rounded p-2 bg-lightgray">
                                        <h4>Test Title</h4>
                                        <p>Subject</p>
                                        <p>Total Marks</p>
                                    </div>
                                </div>
                                <div className="col-3 pr-0">
                                    <div className="col-12 border rounded p-2 bg-lightgray">
                                        <h4>Test Title</h4>
                                        <p>Subject</p>
                                        <p>Total Marks</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );}
}

export default Dashboard;
