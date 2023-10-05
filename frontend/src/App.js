import React, { useEffect } from "react"
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {LoginPage , SignupPage  ,ActivationPage, HomePage} from "./Routes.js";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store"
import {loadUser} from "./redux/actions/user"




function App() {

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignupPage/>}/>
        <Route path="/activation/:activation_token" element={<ActivationPage/>}/>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
