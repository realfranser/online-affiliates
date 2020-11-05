import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import '../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
                    </div>
                    <div class='gridContainer'>
                        <ImageCard place={places[1]} checked={checked} /> 
                    </div>
                    <div class='gridContainer'>
                        <ImageCard place={places[2]} checked={checked} /> 
                    </div>
                    <div class='gridContainer'>
                        <ImageCard place={places[3]} checked={checked} /> 
                    </div>
                    <div class='gridContainer'>
                        <ImageCard place={places[4]} checked={checked} /> 
                    </div>
                    <div class='gridContainer'>
                        <ImageCard place={places[5]} checked={checked} /> 
                    </div>
                </td>
            </table>
        </div>
    );
}