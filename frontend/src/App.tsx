import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register, Notes } from './screens';
import PrivateRoute from './routes/PrivateRoute';


function App() {

  return (
    <div className="container min-h-screen" style={{ maxWidth: '100%', margin: '0rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <PrivateRoute path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
