import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdminPanel from './components/AdminPanel';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div style={{ backgroundColor: '#F6FCFF' }}>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin-panel' element={<AdminPanel></AdminPanel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
