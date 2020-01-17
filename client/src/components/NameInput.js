import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
    },
  },
  moiButton: {
    marginRight: 10,
  },
  moiTextField: {
    marginTop: 80,
  },
}))

export default function NameInput(props) {
  const classes = useStyles()
  const defaultFieldValue = 'Enter your Twitter name'
  const [screenName, setScreenName] = React.useState(defaultFieldValue)

  // Process a request to cancel the entry of the Twitter screen name
  const handleCancel = (event) => {
    setScreenName(defaultFieldValue)
  }
  
  // Update the Twitter screen name when the user clicks the 'Get Tweets' button
  const handleGetTweets = (event) => {
    props.func.updateScreenName(screenName)
  }
  
  // Clear the Twitter screen name field when it comes into focus
  const clickInTwitterName = (event) => {
    setScreenName('')
  }

  // Update the Twitter screen name when the user types into it
  const changeInTwitterName = (event) => {
    setScreenName(event.target.value)
  }

  // Intercept the press of the Enter key in the Twitter screen name field
  const keydownInTwitterName = (event) => {
      // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
      if (event.key === 'Enter') {
        event.preventDefault()
        event.stopPropagation()
        props.func.updateScreenName(screenName)
      }
  }

  return (
    <form className={ classes.root } noValidate autoComplete="off">
      <div className={ classes.moiTextField }>
        <TextField
          required
          id="filled-required"
          label="Required"
          variant="filled"
          value={ screenName }
          onKeyDown={ keydownInTwitterName }
          onClick={ clickInTwitterName }
          onChange={ changeInTwitterName }
        />
      </div>
      <div>
        <Button className={ classes.moiButton } variant="contained" size="medium"
          onClick={ handleCancel }>
          Cancel
        </Button>
        <Button className={ classes.root } variant="contained" size="medium"color="primary"
          onClick={ handleGetTweets }>
          Get Tweets
        </Button>
      </div>
    </form>
  );
}