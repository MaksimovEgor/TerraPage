import React from 'react';
import {AppBar, Drawer, List, ListItem, ListItemText, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useHistory, useLocation} from "react-router";


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
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            background: 'lightgray'
        },
        toolbar: theme.mixins.toolbar
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
                    <Typography>
                        Поиск
                    </Typography>
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


            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>


    )
}