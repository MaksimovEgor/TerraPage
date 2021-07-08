import React from 'react';
import {Button, ButtonGroup, Card, CardContent, CardHeader, Grid, Paper, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import SpikersList from "../SpikersList";
import EventList from "../EventList";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    eventcard: {
        padding: 20,
        height: 'flex'
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
        paddingTop: 30,
        font: 'icon',
        height: 'flex',
        width: '100%'
    }
}));

export function EventsCards() {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.eventcard}>
                <Card elevation={5}>
                    <CardHeader
                        title='Заголовок'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Адрес: Москва...
                        </Typography>
                        <Typography variant='h6'>
                            14:00 - 18:00
                        </Typography>
                        <Typography className={classes.description}>
                            Организовать мероприятие — дело важное, ответственное, требующее особых способностей. Организаторы часто настолько вовлекаются непосредственно в процесс организации, что не уделяют должного внимания привлечению на мероприятие участников. А важно не просто оповестить о событии целевую аудиторию, но и правильно донести суть, убедить в важности и полезности ивента. Как составить текст, который поможет охватить как можно больше участников, рассказывает  журналист Мария Фомичёва. Мария работает корреспондентом в австрийских СМИ, пишет тексты для продвижения мероприятий Zagran.me и помогает десяткам предпринимателей находить своих клиентов с помощью полезного и интересного контента.
                        </Typography>
                        <Typography variant='h6'>
                            Дата и время начала и конца регистрации
                        </Typography>
                        <SpikersList/>
                        <EventList/>

                        <ButtonGroup variant='contained'>
                            <Button onClick={() => alert('delete')}>Удалить</Button>
                            <Button>Редактировать</Button>
                            <Button>Добавить</Button>
                        </ButtonGroup>

                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

