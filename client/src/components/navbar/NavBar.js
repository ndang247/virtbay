import React from 'react';
import {
    AppBar, Toolbar, IconButton, Badge,
    MenuItem, Menu, Typography
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from 'src/assets/images/logo.png';
import useStyles from './navBarStyles';

const NavBar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='VirtBayLogo' height='25px' className={classes.image} />
                        VirtBay
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;