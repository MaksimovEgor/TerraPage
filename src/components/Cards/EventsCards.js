import React from 'react';
import {Card, CardContent, CardHeader, Grid, Paper, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import SpikersList from "../SpikersList";
import EventList from "../EventList";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    description: {
        font: 'icon',
        height: 'flex',
        width: '100%'
    }
}));

export function EventsCards() {

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Card elevation={5}>
                    <CardHeader
                        title='Заголовок'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Адрес: Москва...
                        </Typography>
                        <Typography>
                            Дата и время начала и окончания
                        </Typography>
                        <Typography className={classes.description}>
                            Организовать мероприятие — дело важное, ответственное, требующее особых способностей. Организаторы часто настолько вовлекаются непосредственно в процесс организации, что не уделяют должного внимания привлечению на мероприятие участников. А важно не просто оповестить о событии целевую аудиторию, но и правильно донести суть, убедить в важности и полезности ивента. Как составить текст, который поможет охватить как можно больше участников, рассказывает  журналист Мария Фомичёва. Мария работает корреспондентом в австрийских СМИ, пишет тексты для продвижения мероприятий Zagran.me и помогает десяткам предпринимателей находить своих клиентов с помощью полезного и интересного контента.
                        </Typography>
                        <Typography>
                            Дата и время начала и конца регистрации
                        </Typography>
                        <SpikersList/>
                        <EventList/>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

