import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(1),
    },
}));

export default function CheckboxesGroupEvents() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { a, b } = state;
    const error = [a, b].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
            </FormControl>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" >Сортировать</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={a} onChange={handleChange} name="1" />}
                        label="Предстоящие"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={b} onChange={handleChange} name="2" />}
                        label="Прошедшие"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}
