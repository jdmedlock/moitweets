import React from 'react';
import './App.css';
import Copyright from './components/Copyright';
import InputArea from './containers/InputArea';
import TopBar from './containers/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />

      <main>
        <InputArea />
      </main>

      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
