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
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      {/* En un futuro se podra implementar un grid para limitar el numero de tarjetas por fila,
       de momento lo ponemos en elementos diferentes */}
      <div className="placesToVisit">
        <PlaceToVisit className="placeToVisit"/>       
      </div>
    </div>
  );
}
