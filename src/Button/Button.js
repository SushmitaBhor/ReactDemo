import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  margin: {
    background: 'linear-gradient(45deg, #6bdefe 30%, #22a4ca 120%)',
    border: 0,
    top: '40px',
    width: '15%',
    left: '30px',
    borderRadius: 6,
    color: 'white',
    height: 48,
    fontSize: 'medium',
    padding: '0 20px',
  },
}));

export default function ButtonSizes(props) {
  const classes = useStyles();

  return (
    <Button onClick={props.onClick} className={classes.margin}>
      Add Project
    </Button>
  );
}
