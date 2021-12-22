import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register, Notes } from './screens';
import PrivateRoute from './routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useAppContext } from './context/Context';
import { getLoggedInUserInfo } from './services/users';


function App() {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getLoggedInUserInfo(dispatch);
    }
  }, []);

  return (
    <div className="container min-h-screen" style={{ maxWidth: '100%', margin: '0rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <PrivateRoute path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
