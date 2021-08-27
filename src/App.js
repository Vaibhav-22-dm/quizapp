import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quiz from './Quiz';
import Dashboard from './Dashboard';
import Register from './Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/quizapp/">
            <Login />
          </Route>
          <Route exact path="/quizapp/quiz/:id">
            <Quiz />
          </Route>
          <Route exact path="/quizapp/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/quizapp/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
