import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ItemList from './components/ItemList';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Smart Storage</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
