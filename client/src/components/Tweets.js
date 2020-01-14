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

export default function NameInput() {
  const classes = useStyles();

  const handleCancel = (event) => {
    console.log("You want to cancel?")
  }
  
  const handleSaveTweets = (event) => {
    console.log("You want to save your tweets?")
  }

  return (
    <div>
      <Button className={ classes.moiButton } variant="contained" size="medium"
        onClick={ handleCancel }>
        Cancel
      </Button>
      <Button className={ classes.root } variant="contained" size="medium"color="primary"
        onClick={ handleSaveTweets }>
        Save
      </Button>
    </div>
  );
}