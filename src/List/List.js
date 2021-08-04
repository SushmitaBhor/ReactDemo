import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '200px',
    top: '60px',
    left: '14px',
  },
  ListItem: {
    padding: '0.5rem',
    height: '50px',
    fontFamily: 'Hind Vadodara',
    '&:hover': {
      color: '#20cefd !important',
    },
    // on hover of list item textcolor will set to lightblue
  },
  widthset: {
    width: '15%',
  },
}));

const initialList = [
  {
    id: 'a',
    name: 'Dashboard',
  },
  {
    id: 'b',
    name: 'UI Elements',
  },
  {
    id: 'c',
    name: 'Components',
  },
  {
    id: 'd',
    name: 'Form Stuff',
  },
  {
    id: 'e',
    name: 'Icons',
  },
  {
    id: 'f',
    name: 'Sample Page',
  },
  {
    id: 'g',
    name: 'Data Table',
  },
  {
    id: 'h',
    name: 'Extra',
  },
];

export default function InsetList() {
  const classes = useStyles();
  const [list, setList] = React.useState(initialList);

  return (
    <List className={classes.root} aria-label="contacts">
      {list.map((item) => (
        <ListItem className={classes.ListItem} key={item.id}>
          {item.name}
        </ListItem>
      ))}
    </List>
  );
}
