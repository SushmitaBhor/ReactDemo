import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Typography } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../src/index.css';

const useStyles = makeStyles(() => ({
  table: {
    maxWidth: '1060px',
    borderRadius: 3,
    position: 'absolute',
    left: '53.5%',
    top: '60%',
    background: 'linear-gradient(90deg, #ffffff 100%, #ffffff 100%)',

    transform: 'translate(-39%, 30%)',
  },
}));

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #a26bfe 30%, #ab74cc 90%)',
  border: 0,
  borderRadius: 3,

  color: 'white',
  height: 48,
  width: 115,
  padding: '0 30px',
});

const MyButton2 = styled(Button)({
  background: 'linear-gradient(45deg, #1d79e7 30%, #509bc6 90%)',
  border: 0,
  borderRadius: 3,

  color: 'white',
  height: 48,
  width: 115,
  padding: '0 22px',
});

function createData(name, email, usertype, date, status) {
  return { name, email, usertype, date, status };
}

const rows = [
  createData(
    'Mike Brand',
    'mikebrand@email.com',
    'Admin',
    '25 April 2018',
    <MyButton>PENDING</MyButton>
  ),
  createData(
    'Andrew Strauss',
    'info@youmail.com',
    'Editor',
    '25 April 2018',
    <MyButton2>APPROVED</MyButton2>
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <Typography variant="h6" fontFamily="calibari" align="center">
            <br />
            &emsp;Standard Table Design
          </Typography>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1">
                &emsp;&emsp;&emsp;&nbsp;&nbsp;Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight={1000}>
                Email&nbsp;
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">User &nbsp;Type</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">Joined&nbsp;</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">Status&nbsp;</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                &emsp;&emsp;&emsp;&emsp;
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.usertype}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
