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

export default function CheckboxesGroup() {
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

    const { a, b, c, d, e } = state;
    const error = [a, b, c, d, e].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
            </FormControl>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" >Сортировать</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={a} onChange={handleChange} name="1" />}
                        label="На рассмотрении"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={b} onChange={handleChange} name="2" />}
                        label="Одобрено"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={c} onChange={handleChange} name="3" />}
                        label="Отклонено"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={d} onChange={handleChange} name="4" />}
                        label="Просмотрено"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={e} onChange={handleChange} name="5" />}
                        label="Не просмотрено"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}
