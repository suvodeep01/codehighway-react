import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

// import pages
import Home from "./pages/Home.js"
import About from "./pages/About.js";
import Course from "./pages/Course.js";
import Interview from "./pages/Interview.js";
import Interview_detail from "./pages/Interview_detail.js";
import Contact from './pages/Contact.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

// import react router for link pages
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Header />
        <Routes>

          <Route
            exact
            path="/"
            element={<Home />}
          />


          <Route
            path="/About"
            element={<About />}
          />

          <Route
            path="/Course"
            element={<Course />}
          />

          <Route
            path="/Interview"
            element={<Interview />}
          />

          <Route
            path="/Interview_detail"
            element={<Interview_detail />}
          />

          <Route
            path="/Contact"
            element={<Contact />}
          />

          <Route
            path="/Login"
            element={<Login />}
          />

          <Route
            path="/Signup"
            element={<Signup />}
          />

        </Routes>
        <Footer />
      </Router>



    </>
  );
}

export default App;
