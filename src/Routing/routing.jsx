import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import ProtectedRoute from './protectedRoute';
import Layout from '../layout/layout';
import Signup from '../components/Signup';
import MyProfile from '../components/Profile/MyProfile';
import ChangePassword from '../components/Profile/ChangePassword';
import ChangeEmail from '../components/Profile/ChangeEmail';
import Support from '../components/Profile/Support';
import CryptoWalletChange from '../components/Profile/CryptoWalletChange';
import ChangeProfilePic from '../components/Profile/ChangeProfilePic';
import SupportResponse from '../components/Profile/SupportResponse';

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="change-email" element={<ChangeEmail />} />
          <Route path="support" element={<Support />} />
          <Route path="crypto-wallet-change" element={<CryptoWalletChange />} />
          <Route path="support-response" element={<SupportResponse />} />
          <Route path="change-profile-pic" element={<ChangeProfilePic />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
