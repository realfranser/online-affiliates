import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Table } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { Block, GpsFixed } from '@material-ui/icons';

//React-Router
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

//Pages
import Support from "../pages/Support"
import Contact from "../pages/Contact"
import BecomeAffiliate from "../pages/BecomeAffiliate"
import FAQ from "../pages/FAQ"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: 'fill',
        fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
    },
    appbar: {
        background: 'black',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#000000',
    },
    icon: {
        color: '#c3c3c3',
        fontSize: '2rem',
        '&:hover': {
            cursor: 'pointer',
            color: 'white',
        }
    },
    barraBotones: {
        cursor: 'default',
        width: 'auto',
        display: 'flex',
        'margin-block-start': '1em',
        'margin-block-end': '1em',
        'margin-inline-start': '0px',
        'margin-inline-end': '0px',
        'padding-inline-start': '40px',
    },
    botonesArriba: {
        color: '#c3c3c3',
        '-webkit-box-sizing': 'border-box',
        'box-sizing': 'border-box',
        'display': 'inline-block',
        'position': 'relative',
        top: '50%',
        'z-index': '1',
        'margin-right': '94px',
        'margin-left': '94px',
        'vertical-align': 'center',
        '&:hover': {
            cursor: 'pointer',
            color: 'white',
        }
    },
    accionesBotones: {
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
        'background-origin': 'content-box',
        'background-size': 'cover',
        'width': '1.85714em',
        'max-width': '44.2px',
    },
    colorTextGreen: {
        color: '#85bb65',
        'font-size': '74px',
        'font-weight': '600',
        'line-height': 1.3,
    },
    colorTextBlack: {
        color: '#000000',
        'font-size': '74px',
        'font-weight': '600',
        //'line-height': 1.3,
    },
    colorTextWhite: {
        color: '#fff',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#000000',
        'font-size': '55px',
        'font-weight': '600',
        'line-height': 1.0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goDown: {
        color: '#85bb65',
        fontSize: '4rem',
    },
}));

const SearchBar = ({ keyword, setKeyword }) => {
    const BarStyling = {
        margin: '0 auto',
        width: '375px',
        height: '45px',
        'border-radius': '30px',
        border: '1px solid #dcdcdc',
        outline: 'none'
    };
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            //no tocar ni formatear placeholder, está puesto así para centrarlo
            placeholder="                                  
       
        enter creator code"
            onChange={(e) => setKeyword(e.target.value)}

        />
    );
}

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        {/*<span className={classes.colorTextBlack}>Online</span>
                      <span className={classes.colorTextGreen}>Affiliate</span>*/}
                        <a href=""><img src={process.env.PUBLIC_URL + "oalogoGris.png"}
                            onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + "oalogoFondoNegro.png")}
                            onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + "oalogoGris.png")}
                            style={{ height: 50 }} /></a>
                    </h1>
                    <Router>
                        <ul className={classes.barraBotones}>
                            <li className={classes.botonesArriba}>
                                <a className={classes.accionesBotones}>
                                    <Link to="/support">
                                        Support
                                    </Link>
                                </a>
                            </li>
                            <li className={classes.botonesArriba}>
                                <a className={classes.accionesBotones}>
                                    <Link to="/contact">
                                        Contact us
                                    </Link>
                                </a>
                            </li>
                            <li className={classes.botonesArriba}>
                                <a className={classes.accionesBotones}>
                                    <Link to="/affiliates">
                                        Become Affiliate
                                    </Link>
                                </a>
                            </li>
                            <li className={classes.botonesArriba}>
                                <a className={classes.accionesBotones}>
                                    <Link to="/faq">
                                        FAQ
                                    </Link>
                                </a>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/support" exact>
                                <Support/>
                            </Route>
                            <Route path="/contact" exact>
                                <Contact/>
                            </Route>
                            <Route path="/affiliates" exact>
                                <BecomeAffiliate/>
                            </Route>
                            <Route path="/faq" exact>
                                <FAQ/>
                            </Route>
                        </Switch>
                    </Router>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />
                        <span className={classes.colorTextBlack}>Online</span>
                        <span className={classes.colorTextGreen}>Affiliate</span>
                        <h1 />
                        <SearchBar />
                    </h1>
                    <br />
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}