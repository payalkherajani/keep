import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register } from './screens';

function App() {

  return (
    <div className="container min-h-screen" style={{ maxWidth: '100%', margin: '0rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
