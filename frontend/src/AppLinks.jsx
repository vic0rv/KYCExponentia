import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Register from './views/Register/Register';
import ClientList from './views/ClientList/ClientList';
import Validation from './views/Validation/Validation';
import App from "./App";

export default function AppLinks() {
  return (
  <BrowserRouter>
    <nav>
     <ul>
       <li><Link to="/register">Register</Link></li>
       <li><Link to="/client-list">Client List</Link></li>
       <li><Link to="/validation">Validation</Link></li>
     </ul>
     </nav>
     <Routes>
        <Route path="/" exact element={<App/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/client-list" element={<ClientList/>} />
        <Route path="/validation" element={<Validation/>} />
     </Routes>
   </BrowserRouter>   
  )
}
