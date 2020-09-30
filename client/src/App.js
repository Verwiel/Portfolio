import React from 'react'
import Logo from './assets/logo.svg'


function App() {
  return (
    <div className="App">
      <header>
        <h1>Drew -- Portfolio Website</h1>
        <img src={Logo} alt='Logo' style={{width: '100px'}} />
      </header>
    </div>
  );
}

export default App
