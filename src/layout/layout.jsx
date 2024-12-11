import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex h-screen">
      <Header />
      <Sidebar />
      <div class="content-body">

        <div class="container-fluid">
          <Outlet /> {/* Content will be injected here based on the current route */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Layout;
