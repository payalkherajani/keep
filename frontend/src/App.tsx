import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';

function App() {

  return (
    <div className="container mx-auto min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
