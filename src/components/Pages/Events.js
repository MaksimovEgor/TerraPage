import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {EventsCards} from "../Cards/EventsCards";


const cards = [1, 2, 3, 4];

export function Events () {
    return (

        <div>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} sm={3}>
                        <EventsCards />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}