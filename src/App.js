import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
