import Header from './Header';
import NavHeader from './NavHeader';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div id="main-wrapper">
      <NavHeader />
      <Header />
      <Sidebar />
      <Outlet /> {/* Content will be injected here based on the current route */}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
