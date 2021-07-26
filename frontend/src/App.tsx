import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
