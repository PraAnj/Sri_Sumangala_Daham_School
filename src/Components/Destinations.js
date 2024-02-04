import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Destinations = () => {
    return (
        <><Box mt={4} mb={4} sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/images/blood_donation_2023.png"
                                title="blood donation" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Blood Donation 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    we organized a blood donation event as part of the celebration of 54th birthday of Sri Sumangala Maha Nayaka thero.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/image/dathu_vandana_2023.png"
                                title="dathu vandana 2023" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dathu Vandana 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    we organized a datu vandana part of the poson poya day
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Event 3
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Event summary  
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Event 4
                                </Typography>
                                <Typography variant="body2" color="text.secondary"
                                    Event summary>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box></>
    )
}

export default Destinations
