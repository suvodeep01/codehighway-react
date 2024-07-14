import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

const MainLayout = () => (
  <>
    <Navbar />
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;