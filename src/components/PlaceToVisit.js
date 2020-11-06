import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import '../index.css'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '60px 0px',
        'width': '100%',
        'display': 'flex',
        '-webkit-box-align': 'center',
        'align-items': 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        'border-spacing': '55 55px',
        'border-collapse': 'separate',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));
export default function () {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">
            <table>
                <td class='bid-floor-col'>
                    <div class='gridContainer'>
                        <ImageCard place={places[0]} checked={checked} /> 
                        <ImageCard place={places[1]} checked={checked} />
                    </div>
                    <div class='gridContainer'>
                        <ImageCard place={places[2]} checked={checked} /> 
                        <ImageCard place={places[3]} checked={checked} /> 
                    </div>
                    <div class='gridContainer'>
                        <ImageCard place={places[4]} checked={checked} /> 
                        <ImageCard place={places[5]} checked={checked} /> 
                    </div>
                </td>
            </table>
        </div>
    );
}