import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register, Notes } from './screens';

function App() {

  return (
    <div className="container min-h-screen" style={{ maxWidth: '100%', margin: '0rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
