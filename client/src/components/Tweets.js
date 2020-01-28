import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FileSaver from 'file-saver'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  fileChooser: {
    display: 'flex',
    align: 'center',
  },
  fileChooserParts: {
    width: '33%',
  },
  fileChooserInstructions: {
    width: '50%',
  },
  moiBox: {
    backgroundColor: 'lightgrey',
  },
  moiButton: {
    marginTop: 10,
    marginRight: 10,
  },
  moiJSON: {
    fontFamily: '"Courier New", Courier, monospace',
    marginTop: 5,
    marginLeft: 5,
  },
}))

export default function Tweets(props) {
  console.log('Tweets props: ', props);
  const defaultFieldValue = 'Enter file name:'
  const [outputFileName, setOutputFileName] = React.useState(defaultFieldValue)

  const classes = useStyles();
  

  // Clear the output file name field when it comes into focus
  const clickInOutputFileName = (event) => {
    setOutputFileName('')
  }

  // Update the output file name when the user types into it
  const changeInOutputFileName = (event) => {
    setOutputFileName(event.target.value)
  }

  // Intercept the press of the Enter key in the output file name field
  const keydownInOutputFileName = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      // props.func.updateScreenName(screenName)
    }
  }

  const handleCancel = (event) => {
    console.log('cancel button pressed')
  }

  const handleSaveTweets = (event) => {
    const tweets = document.getElementById('tweetsJSON').innerHTML
    const blob = new Blob([tweets], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.txt");
  }

  return (
    <div>
      <Typography variant="h6" align='left'>
        JSON for { props.screenName }'s Tweets:
      </Typography>
      <Paper style={{maxHeight: 200, overflow: 'auto'}} elevation={ 5 }>
        <Typography id="tweetsJSON" className={ classes.moiJSON } paragraph={ true } align='left'>
          { props.tweets !== undefined
              ? props.tweets.data.tweetsJSON.map(row => (JSON.stringify(row, null, '\t')))
              : (' ')
          }
        </Typography>
      </Paper>

      <Box my={ 4 }>
        <span className={ classes.fileChooser }>
          <span className={ classes.fileChooserParts }>
            <TextField
              required
              id="filled"
              label="Output file name:"
              variant="filled"
              value={ outputFileName }
              onKeyDown={ keydownInOutputFileName }
              onClick={ clickInOutputFileName }
              onChange={ changeInOutputFileName }
            />  
          </span>
          <span className={ classes.fileChooserInstructions }>
            <Typography align='center'>
              Enter OR Choose a file name for your Tweets:
            </Typography>
          </span>
          <span className={ classes.fileChooserParts }>
            <label for="filechooser">Choose an output file:</label>
            <input type="file"
              id="filechooser" 
              name="filechooser"
              accept=".json, .txt">
            </input>
          </span>
        </span>

        <div>
          <Button className={ classes.moiButton } variant="contained" 
            size="medium" onClick={ handleCancel }>
            Cancel
          </Button>
          <Button className={ classes.moiButton } variant="contained" 
            size="medium" color="primary" onClick={ handleSaveTweets }>
            Save
          </Button>
        </div>
      </Box>
    </div>
  );
}