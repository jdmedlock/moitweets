import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import './App.css'
import Copyright from './components/Copyright'
import InputArea from './containers/InputArea'
import OutputArea from './containers/OutputArea'
import TopBar from './containers/TopBar'

const App = () => {
  const [screenName, setScreenName] = useState('')
  const [tweetsJSON, setTweetsJSON] = useState()
  const [isDataLoaded, setIsDataLoaded] = useState(false)                                                     // second, we initialize a variable by useRef

  const updateScreenName = async (screenName) => {
    setScreenName(screenName)
  }

  function getTweets(screenName) {
    return new Promise(resolve => {
      const serverURL = 'http://localhost:3001/gettweets/'+screenName
      fetch(serverURL)
        .then(response => response.json())
        .then(jsonBody => { 
          resolve(jsonBody) 
        })
        .catch(error => {
          resolve({ data: {
            "statusCode": 99,
            "tweetsJSON": [ `Error accessing MoiTweets API to retrieve tweets. error:${error}` ], 
          }})
        })
    })
  }

  useEffect(() => {
    if (screenName !== '') {
      getTweets(screenName).then(setTweetsJSON)
      setIsDataLoaded(true)
    }
  },[screenName, setIsDataLoaded])

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
        { isDataLoaded
            ? (<OutputArea screenName={ screenName } tweets={ tweetsJSON } />)
            : (' ')
        }
      </main>

      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
