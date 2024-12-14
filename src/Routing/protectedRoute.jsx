import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  const token=true

  if (!token) {
    return <Navigate to="/login" replace />; // Redirect to login if no token
  }

  return children; // Render the protected component if the token exists
};

export default ProtectedRoute;
