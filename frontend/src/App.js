import React from "react"
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {LoginPage , SignupPage} from "./Routes.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignupPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
