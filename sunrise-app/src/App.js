import './App.css';
import Layouts from './Components/Layouts/Layouts.jsx';
import Home from './Components/MainComponents/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserHome from './Components/MainComponents/User/UserHome';



function App() {
  return (
    <div className="App">
  <UserHome/>
  
  
    </div>
  );
}

export default App;
