import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register } from './screens';

function App() {

  return (
    <div className="container mx-auto min-h-screen">
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
