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
  moiButton: {
    marginTop: 10,
    marginRight: 10,
  },
  tweetsJSON: {
    fontFamily: '"Courier New", Courier, monospace',
    marginLeft: 5,
  },
  fileChooser: {
    display: 'flex',
    align: 'center',
    alignItems: 'space-around',
    margin: 'auto',
    width: '80%',
  },
  fileChooserInput: {
    flex: '1',
    margin: 'auto',
  },
  fileChooserSeparator: {
    flex: '1',
    margin: 'auto',
  },
  fileChooserSelector: {
    flex: '1',
    margin: 'auto',
  },
  moiBox: {
    backgroundColor: 'lightgrey',
  },
}))

export default function Tweets(props) {
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

  const handleClear = (event) => {
    setOutputFileName(defaultFieldValue)
    if (props.clearTweetsOutput !== undefined) {
      props.clearTweetsOutput()
    } 
  }

  const handleSaveTweets = (event) => {
    let jsonFileName = '';
    const tweets = document.getElementById('tweetsJSON').innerHTML
    const blob = new Blob([tweets], {type: "text/plain;charset=utf-8"})

    if (outputFileName === defaultFieldValue) {
      // Retrieve the output file name through a chooser
      const filePath = document.querySelector('#filechooser')
      jsonFileName = filePath.value.split('C:\\fakepath\\')[1] // Remove the fake file path added by the browser
    } else {
      // Use the user entered output file name
      jsonFileName = outputFileName
    }
    FileSaver.saveAs(blob, jsonFileName)
  }

  return (
    <div>
      <Typography variant="subtitle1" align='left'>
        JSON for { props.screenName }'s Tweets:
      </Typography>
      <Paper style={{maxHeight: 200, overflow: 'auto'}} elevation={ 5 }>
        <Typography id="tweetsJSON" className={ classes.tweetsJSON } paragraph={ true } align='left'>
          { props.tweets !== undefined
              ? props.tweets.data.tweetsJSON.map(row => (JSON.stringify(row, null, '\t')))
              : (' ')
          }
        </Typography>
      </Paper>

      <Box my={ 4 }>
        <span className={ classes.fileChooser }>
          <span className={ classes.fileChooserInput }>
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
          <span className={ classes.fileChooserSeparator }>
            <Typography variant="subtitle1" align='center'>
              &lt;--- Enter a file name OR Choose the file  ---&gt;
            </Typography>
            <Typography variant="subtitle1" align='center'>
              your Tweets are to be written to
            </Typography>
          </span>
          <span className={ classes.fileChooserSelector }>
            <input type="file"
              id="filechooser" 
              name="filechooser"
              accept=".json, .txt">
            </input>
          </span>
        </span>

        <div>
          <Button className={ classes.moiButton } variant="contained" 
            size="medium" onClick={ handleClear }>
            Clear
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