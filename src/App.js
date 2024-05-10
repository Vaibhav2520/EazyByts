import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './pages/registration';
import Success from './pages/success';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Registration" element={<Registration/>}/>
          <Route path="Success" element={<Success/>}/>
         <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
