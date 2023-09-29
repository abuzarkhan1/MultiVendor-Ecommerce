import React from "react"
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {LoginPage , SignupPage  ,ActivationPage} from "./Routes.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignupPage/>}/>
        <Route path="/activation/:activation_token" element={<ActivationPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
