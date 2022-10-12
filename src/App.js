import React from 'react';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> HELLO WORLD</h1>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={HomePage} />

        <Route path="/dashboard" element={DashboardPage} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}
     
export default App;
