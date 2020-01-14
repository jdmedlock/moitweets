import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Copyright from './components/Copyright';
import InputArea from './containers/InputArea';
import TopBar from './containers/TopBar';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
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
