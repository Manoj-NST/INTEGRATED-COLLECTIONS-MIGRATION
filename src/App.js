import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import PrivateRoute from './Routes/PrivateRoute';
import GroupDetails from './Pages/Group';
import { setAuthToken } from './service/auth.header';

function App() {

  const token = window.localStorage.getItem("token");
  if(token){
    setAuthToken(token);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/groupDetails" component={GroupDetails} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;