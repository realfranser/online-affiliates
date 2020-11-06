import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

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
        background: 'white',
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
        color: '#000000',
        fontSize: '2rem',
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

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {
    margin:'0 auto',
    width:'375px',
    height: '45px',
    'border-radius':'30px',
    border:'1px solid #dcdcdc',
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
                      <a href=""><img src={process.env.PUBLIC_URL + "oalogo.ico"} style={{height: 50}}/></a>
                    </h1>
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
                    <h1/>
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