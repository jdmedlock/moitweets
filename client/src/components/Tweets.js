import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FileSaver from 'file-saver'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
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
  const classes = useStyles();

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
        Tweets JSON for { props.screenName }:
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
        <div>
          <label  className={ classes.moiBox } htmlFor="filechooser">Choose a file for your Tweets:</label>
          <input type="file"
                id="filechooser" name="filechooser"
                accept=".json, .txt">
          </input>
        </div>

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