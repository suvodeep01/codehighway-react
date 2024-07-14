import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';



import MainLayout from './MainLayout';
import HtmlCourseLayout from './HtmlCourseLayout.js';

// import pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";

import Course from "./pages/Course.js";
import Interview from "./pages/Interview.js";
import Interview_detail from "./pages/Interview_detail.js";
import Contact from './pages/Contact.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

// course components
import Html_course from './Courses/Html_course.js';

// import react router for link pages
import { BrowserRouter as Router, Switch, Route, Routes, Navigate } from 'react-router-dom';


const App = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/interview_detail" element={<Interview_detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route element={<HtmlCourseLayout />}>
        <Route path="/html_course" element={<Html_course />} />
      </Route>
    </Routes>
  </Router>
);

export default App;