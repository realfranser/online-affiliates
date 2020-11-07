import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 600,
        height:780,
        background: 'rgba(0,0,0,0)',
        marginRight: '90px',
        marginLeft: '90px',
        'box-shadow': 'none',
    }
});

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div id="footerRrss">
                {/*Meter aqui imagenes de RRSS con enlaces (PARTE IZQ DEL FOOTER)*/}
            </div>
            <div id="footerLinks">
                {/*Meter "ACERCA DE", "CONTACTO"... (PARTE DRCH FOOTER)*/}
            </div>
        </div>
    );
}