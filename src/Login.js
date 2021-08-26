import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
  
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(true)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://vaibhavquizapi.herokuapp.com/api/auth/',
        {
            'username':username,
            'password':password
        },
        {
            headers:{
                'Content-Type':'application/json',
            }
        }
        )
        .then(res=>{
            console.log(res)
            console.log(res.data['token'])
            setToken(res.data['token'])
            if(res.data['message']){
                setToken(false)
            }
            else{
                localStorage.setItem('token', res.data['token'])
            }
            if(res.data['token']) history.push('dashboard/');
        })

    }
    return ( 
        <div className="container" style={{
            marginTop:"27vh"
        }}>
            <div className="row justify-content-center">
                <form action="" className="col-4 bg-light p-4 border rounded shadow">
                    <div className="form-group">
                        <h2 className="text-center text-secondary pb-3">Login To Portal</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Username</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" onChange={(e) => {setUsername(e.target.value)}} value={username}></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => {setPassword(e.target.value)}} value={password}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Login
                    </button>
                    <Link type="submit" className="btn btn-warning mx-2" to='/register' >
                        Register
                    </Link>
                    {!token && 
                            <div className="alert alert-danger mt-2" role="alert" >No such user Found</div>
                    }
                </form>
            </div>
            
        </div>
    );
}
 
export default Login;

