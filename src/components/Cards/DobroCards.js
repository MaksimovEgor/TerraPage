import React from 'react';
import {Box, Button, ButtonGroup, Card, CardContent, CardHeader, Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {alpha, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 10, 1, 10),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));

export function DobroCards () {

    const classes = useStyles();

    return (
    <div>
        <Container>

                <Card elevation={5}>
                    <CardHeader
                        title='Фамилия имя Отчество'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Дата: 24.08.2021 16:37
                        </Typography>
                        <Box position='right'>
                            <Typography><b>Статус:</b> На рассмотрении</Typography>
                        </Box>
                        <Container position='right'>
                            <img src="https://picsum.photos/800/250"/>
                        </Container>
                        <Container>

                            <Typography paragraph>
                                10.04.2021 Наши студенты приняли частие в благотворительном мероприятии
                                Музейно-выставочного
                                центра и волонтерского объединения "Маяк" в поддержку Кости Гепалова.
                                Участвовали Ковалева Валерия вокальный номер и волонтеры Стукова Виктория ПС 94 и
                                Голобокова
                                Виктория ПС 93 (участвовали в качестве аниматоров).
                            </Typography>

                        </Container>
                        <ButtonGroup variant="contained" color="primary"
                                     aria-label="contained primary button group">
                            <Button>Принять</Button>
                            <Button>Отклонить</Button>

                        </ButtonGroup>
                    </CardContent>
                </Card>

        </Container>
    </div>
    )
}



/*



{cards.map((card) => (
    <Container key={card}>
        <main className={classes.content}>
            <div className={classes.toolbar}/>

            <Container>

                <Box>
                    <Typography paragraph>

                        <div>
                            <Typography variant='h5'>Иванов Артур Петрович</Typography>
                        </div>
                        <span>24.08. 2021 16:37</span>
                    </Typography>
                </Box>

                <Box position='right'>
                    <Typography><b>Статус:</b> На рассмотрении</Typography>
                </Box>

                <Container position='right'>
                    <img src="https://picsum.photos/800/250"/>
                </Container>
                <Container>

                    <Typography paragraph>
                        10.04.2021 Наши студенты приняли частие в благотворительном мероприятии
                        Музейно-выставочного
                        центра и волонтерского объединения "Маяк" в поддержку Кости Гепалова.
                        Участвовали Ковалева Валерия вокальный номер и волонтеры Стукова Виктория ПС 94 и
                        Голобокова
                        Виктория ПС 93 (участвовали в качестве аниматоров).
                    </Typography>


                </Container>
                <ButtonGroup variant="contained" color="primary"
                             aria-label="contained primary button group">
                    <Button>Принять</Button>
                    <Button>Отклонить</Button>

                </ButtonGroup>
            </Container>

        </main>
    </Container>*/
