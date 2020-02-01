import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import NameInput from '../components/NameInput';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  moiContainer: {
    marginTop: 0,
    paddingTop: 0,
  },
}))

export default function InputArea(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={ classes.moiContainer } maxWidth="sm">
        <Box my={ 4 }>
          <NameInput updateScreenName={ props.updateScreenName }/>
        </Box>
      </Container>
    </React.Fragment>
  );
}