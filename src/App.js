import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/newYork2.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));asses = useStyles();
export default function App() {
  const cl
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className="placesToVisit">
        <PlaceToVisit className="placeToVisit"/>       
      </div>
    </div>
  );
}
