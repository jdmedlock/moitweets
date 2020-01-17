import React from 'react'
import Button from '@material-ui/core/Button'
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
}))

export default function Tweets(props) {
  const classes = useStyles();

  const handleSaveTweets = (event) => {
    console.log("You want to save your tweets?")
  }

  console.log('Tweets props: ', props.screenName.screenName)

  return (
    <div>
      <Button className={ classes.root } variant="contained" size="medium"color="primary"
        onClick={ handleSaveTweets }>
        Save
      </Button>
    </div>
  );
}