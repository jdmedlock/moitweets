import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import './App.css'
import Copyright from './components/Copyright'
import InputArea from './containers/InputArea'
import OutputArea from './containers/OutputArea'
import TopBar from './containers/TopBar'

const App = () => {
  const [screenName, setScreenName] = useState(0);

  const updateScreenName = (screenName) => {
    console.log(`updating screen name: ${screenName}`)
    setScreenName(screenName)
  }

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
        <InputArea updateScreenName={ updateScreenName } />
        <OutputArea screenName={ screenName } />
      </main>

      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
