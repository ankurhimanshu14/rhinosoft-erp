import React from 'react';

import {
    Card,
    CardMedia,
    CardActionArea,
    Typography,
    CardContent,
    CardActions,
    Button
} from '@material-ui/core';

import useStyles from '../customStyles';

export default function Profile() {
    const classes = useStyles();
    return(
        <>
            <Card variant="outlined" className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="../../public/SCADA.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}