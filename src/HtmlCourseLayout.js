import { Outlet } from 'react-router-dom';
import HtmlCourseHeader from './Courses/HtmlCourseHeader.js';
import Footer from './Components/Footer.js';

const HtmlCourseLayout = () => (
  <>
    <HtmlCourseHeader />
    <Outlet />
    {/* <Footer /> */}
  </>
);

export default HtmlCourseLayout;