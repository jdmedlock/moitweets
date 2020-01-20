import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  moiButton: {
    marginTop: 10,
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

  const handleSaveTweets = (event) => {
    console.log("You want to save your tweets?")
  }

  return (
    <div>
      <Typography variant="h6" align='left'>
        Tweets JSON for { props.screenName }:
      </Typography>
      <Paper style={{maxHeight: 200, overflow: 'auto'}} elevation={ 5 }>
        <Typography className={ classes.moiJSON } paragraph={ true } align='left'>
          { props.tweets !== undefined
              ? props.tweets.data.map(row => (JSON.stringify(row, null, '\t')))
              : (' ')
          }
        </Typography>
      </Paper>
      
      <Button className={ classes.moiButton } variant="contained" size="medium"color="primary"
        onClick={ handleSaveTweets }>
        Save
      </Button>
    </div>
  );
}