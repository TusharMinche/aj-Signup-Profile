import Signup from './components/Signup';
import "./App.css";
import { useSelector } from 'react-redux';
import Profile from './components/Profile';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <Routes>
        <Route
          path="/signup"
          element={user ? <Navigate to="/profile" /> : <Signup />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/signup" />}
        />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;
