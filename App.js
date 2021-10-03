import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom"; //So that we can go to different pages
import LoginForm from './Components/LoginForm';
// import Home from './Components/Home';
// <a href = ".Components/ScheduleInput">Plan your schedule</a>


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");

      setUser({
        name: details.name,
        email: details.email
      });
    }
      
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
      
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    // Create Different Route
    // <BrowserRouter>
    //   <Switch>
    //     <Route component={Home} path='/home' />
    //   </Switch>
    // </BrowserRouter>

    //Original one
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
export default App;