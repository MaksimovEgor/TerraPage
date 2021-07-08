import React from 'react';
import {DobroCards} from "../Cards/DobroCards";

const cards = [1, 2, 3];

export function Dobro () {
    return (
        <div>
            {cards.map( card => (<DobroCards />) )}

        </div>
    )
}