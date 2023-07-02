// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Header from './components/Header/Header';
import AppLinks from './AppLinks';
// import Register from './views/Register/Register';
// import ClientList from './views/ClientList/ClientList';
// import Validation from './views/Validation/Validation';
import './App.css'

export default function App() {
  return (
      <div>
        <Header />
        <AppLinks />      
      </div>
  );
}
