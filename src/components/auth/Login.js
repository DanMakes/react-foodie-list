import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <form className={classes.container}>
          <h1>Account Login</h1>
          <TextField
            id='user-name'
            label='Name'
            className={classes.textField}
            margin='normal'
          />
          <TextField
            id='user-name'
            label='Name'
            className={classes.textField}
            margin='normal'
          />
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Login;
