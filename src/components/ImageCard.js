import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 577,
        height:780,
        background: 'rgba(0,0,0,0)',
        marginRight: '90px',
        marginLeft: '90px',
        'box-shadow': 'none',
        
    },
    media: {
        marginTop: '100px',
        height: '350px',
        width: '600px',
        'background-size': 'cover',
        'background-position': '50% 50%',
    },
    title: {
        fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#000000',
    },
    desc: {
        fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
        fontSize: '1.1rem',
        color: '#000000',
    },
});

export default function ImageCard({ place, checked }) {
    const classes = useStyles();

    return (
        /*<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>*/
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={place.imageUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {place.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.desc}
                        class="imagesCardDescription"
                    >
                        {place.description}
                    </Typography>
                    <Typography
                        component="br"
                    ></Typography>
                    <Typography
                        variant="h2"
                        component="h1"
                        className={classes.code}
                        class="imagesCardCode"
                    >
                        {place.code}
                    </Typography>
                </CardContent>
            </Card>
        /*</Collapse>*/
    );
}