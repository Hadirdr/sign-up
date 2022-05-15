import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
