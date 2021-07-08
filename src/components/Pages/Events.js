import React from 'react';

import {EventsCards} from "../Cards/EventsCards";


const cards = [1, 2, 3, 4];

export function Events() {
    return (
        <div>
            {cards.map(card => (<EventsCards/>))}
        </div>
    )
}