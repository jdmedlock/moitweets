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
    marginTop: 10,
  },
}))

export default function NameInput() {
  const classes = useStyles();

  const handleCancel = () => {
    console.log("You want to cancel?")
  }

  const handleGetTweets = () => {
    console.log("You want to get your tweets?")
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.moiTextField}>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter your Twitter name"
          variant="filled"
        />
      </div>
      <div>
        <Button className={classes.moiButton} variant="contained" size="medium"
          onClick={handleCancel}>Cancel</Button>
        <Button className={classes.root} variant="contained"  size="medium"color="primary"
          onClick={handleGetTweets}>Get Tweets
        </Button>
      </div>
    </form>
  );
}