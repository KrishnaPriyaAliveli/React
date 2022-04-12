import './App.css';
import User from './components/User';
import { Routes, Route } from 'react-router-dom';
import EditUser from './components/editUser';
function App() {
  return (
     <div className="User">
    <Routes>
      <Route path="/" element={<User/>} />
      <Route path ="/edit_User/:id" element = {<EditUser/>}/>
    </Routes>
    </div> 
     );
}

export default App;
