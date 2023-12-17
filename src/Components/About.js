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

const About = () => {
  return (
      <><Box sx={{ width: '100%', backgroundColor: '#6a9c77' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" gutterBottom>Sri Devram Vehera Pannipitiya</Typography>
            <Typography variant="h6" gutterBottom>Adress 01</Typography>
            <Typography variant="h6" gutterBottom>Depanama</Typography>
            <Typography variant="h6" gutterBottom>Pannipitiya</Typography>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" gutterBottom>Email : srisumangaladahampasala@gmail.com</Typography>
            <Typography variant="h6" gutterBottom>Mobile : 0712144300</Typography>
            <Typography variant="h6" gutterBottom>Phone : 0112847444</Typography>
            <Typography variant="h6" gutterBottom>Web : devramvehera.lk</Typography>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" gutterBottom>Facebook :</Typography>
            <Typography variant="h6" gutterBottom>Instagram :</Typography>
            <Typography variant="h6" gutterBottom>Youtube :</Typography>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" gutterBottom>Inquire us :</Typography>
          </Grid>
        </Grid>
      </Box></>
  )
}

export default About