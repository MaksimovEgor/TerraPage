import React from 'react';
import {
    AppBar,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Route, useHistory, useLocation} from "react-router";
import PrimarySearchAppBar from "./components/Navigation";
import CheckboxesGroupDobro from "./components/CheckboxDobro";
import {Switch} from "react-router-dom";
import {Events} from "./components/Pages/Events";
import CheckboxesGroupEvents from "./components/CheckboxDobroEvents";


const drawerWidth = 240;


const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth,

        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#4b72bd'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            background: 'primary',
            color: 'white'
        },
        toolbar: theme.mixins.toolbar,
        sort: {
            paddingTop: 20
        }
    }
})

export function Layout({children}) {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text: 'Терра добро',
            path: '/dobro-page'
        },
        {
            text: 'Мероприятия',
            path: '/events-page'
        },
    ]

    return (


        <div className={classes.root}>

            <AppBar
                className={classes.appbar}>
                <Toolbar>
                    <PrimarySearchAppBar/>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography className={classes.title} variant='h5'>
                        Терра
                    </Typography>
                </div>

                {menuItems.map(item => (
                    <ListItem
                        button
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                        key={item.text}>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}


                <div className={classes.sort}>
                    <Switch>
                        <Route path="/events-page"><CheckboxesGroupEvents/></Route>
                        <Route path="/dobro-page"><CheckboxesGroupDobro/></Route>
                    </Switch>
                </div>


            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>


    )
}