import React from 'react';
import CropPortraitOutlinedIcon from '@material-ui/icons/CropPortraitOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    color: '#ffffff',
    cursor: 'pointer',
    background: 'linear-gradient(45deg, #c082e7 30%, #ab71eb 90%)',
    width: '800px',
    height: '250px',
    marginLeft: '80px',
    fontSize: '1.5rem',
    overflow: 'hidden',
    fontFamily: 'Hind Vododara',
    fontWeight: 400,
    position: 'relative',
    backgroundColor: '#d386da',
    borderRadius: '20px',
  },
  title: {
    fontSize: 20,
    marginTop: '30px',
  },
  card1: {
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '1.5rem',
    width: '800px',
    background: 'linear-gradient(45deg, #74a8f4 30%, #3f97c1 90%)',
    height: '250px',
    fontFamily: 'Hind Vododara',
    position: 'relative',
    fontWeight: '400',
    borderRadius: '20px',
    backgroundColor: '#75b1d9',
  },
  card2: {
    color: '#ffffff',
    overflow: 'hidden',
    width: '800px',
    position: 'relative',
    height: '250px',
    background: 'linear-gradient(45deg, #f19c9c 30%, #ef5e5e 90%)',
    cursor: 'pointer',
    fontSize: '1.5rem',
    fontFamily: 'Hind Vododara',
    fontWeight: '400',
    borderRadius: '20px',
    overflowX: 'hidden !important',
    backgroundColor: 'rgba(243, 18, 10, 0.5)',
  },
  card3: {
    marginLeft: '200px',
    width: '150px',
    marginTop: '-150px',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    height: '150px',
    boxShadow: 'inset 12px 14px 85px hsl(0deg 62% 86%)',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
  card4: {
    backgroundColor: 'transparent',
    marginLeft: '230px',
    width: '150px',
    marginTop: '-246px',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    height: '150px',
    boxShadow: 'inset 12px 14px 85px hsl(0deg 62% 86%)',
    borderRadius: '50%',
  },
  card5: {
    width: '150px',
    cursor: 'pointer',
    height: '150px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'inset 12px 14px 85px hsl(209deg 67% 75%)',
    marginTop: '-240px',
    marginLeft: '230px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
  card6: {
    width: '150px',
    cursor: 'pointer',
    height: '150px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'inset 12px 14px 85px hsl(209deg 67% 75%)',
    marginTop: '-56px',
    marginLeft: '200px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
  card7: {
    backgroundColor: 'transparent',
    marginLeft: '230px',
    width: '150px',
    marginTop: '-240px',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    height: '150px',
    boxShadow: 'inset 12px 14px 85px hsl(281deg 62% 86%)',
    borderRadius: '50%',
  },
  card8: {
    backgroundColor: 'transparent',
    marginLeft: '200px',
    width: '150px',
    marginTop: '-60px',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    height: '150px',
    boxShadow: 'inset 12px 14px 85px hsl(281deg 62% 86%)',
    borderRadius: '50%',
  },
  cardGroup: {
    display: 'flex',
    padding: '20px',
    overfow: 'hidden',
    columnGap: '20px',
    width: '75%',
    height: '70%',
    marginTop: '60px',

    marginLeft: '300px',
  },
  titleDash: {
    marginLeft: '456px',
    marginTop: '680px',
    fontFamily: 'Hind Vadodara',
    fontSize: 'larger',
    color: '#708090',
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <CropPortraitOutlinedIcon />;

  return (
    <div className={classes.cardGroup}>
      <Card className={classes.root} onClick={props.onClick}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {bull}
          </Typography>
          <Typography className={classes.title} color="#ffffff">
            {'Stock Total'}
          </Typography>
          <Typography variant="h5" component="h2">
            <br />
            {'$150000'}
          </Typography>
          <Typography variant="h6" component="p">
            <br />
            {'Increase by 60%'}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <Card className={classes.card7}></Card>
        <Card className={classes.card8}></Card>
      </Card>
      <Card className={classes.card1} onClick={props.onClick}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {bull}
          </Typography>
          <Typography className={classes.title} color="#ffffff">
            {'Total Profit'}
          </Typography>
          <Typography variant="h5" component="h2">
            <br />
            {'$250000'}
          </Typography>
          <Typography variant="h6" component="p">
            <br />
            {'Increase by 60%'}
          </Typography>
        </CardContent>
        <CardActions></CardActions>

        <Card className={classes.card5}></Card>
        <Card className={classes.card6}></Card>
      </Card>
      <Card className={classes.card2} onClick={props.onClick}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {bull}
          </Typography>
          <Typography className={classes.title} color="#ffffff">
            {'Unique Visitors'}
          </Typography>
          <Typography variant="h5" component="h2">
            <br />
            {'250000'}
          </Typography>

          <Typography variant="h6" component="p">
            <br />
            {'Increase by 60%'}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <Card className={classes.card3}></Card>
        <Card className={classes.card4}></Card>
      </Card>
    </div>
  );
}
