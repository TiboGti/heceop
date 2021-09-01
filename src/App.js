import React from 'react';
import './App.css';
import Hero from './components/Hero/hero';
import  Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
      <Hero/>
      </main>
    </div>
  );
}

export default App;
