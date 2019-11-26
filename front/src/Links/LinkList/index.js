import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
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
}));

export default function Index() {

  const classes = useStyles()
  let links_array = [
    {
      name: 'link header 1',
      comment: 'link comment 1',
      link_url: 'https://www.youtube.com/watch?v=jKW4s02ib7s',
      created_at: '2019-01-01',
      updated_at: '2019-01-01',
    },
    {
      name: 'link header 1',
      comment: 'link comment 1',
      link_url: 'https://www.youtube.com/watch?v=jKW4s02ib7s',
      created_at: '2019-01-01',
      updated_at: '2019-01-01',
    },
    {
      name: 'link header 1',
      comment: 'link comment 1',
      link_url: 'https://www.youtube.com/watch?v=jKW4s02ib7s',
      created_at: '2019-01-01',
      updated_at: '2019-01-01',
    },
    {
      name: 'link header 1',
      comment: 'link comment 1',
      link_url: 'https://www.youtube.com/watch?v=jKW4s02ib7s',
      created_at: '2019-01-01',
      updated_at: '2019-01-01',
    },
  ]

  function mapLinks() { // link mapper
  }

  mapLinks()

  return (
    <Container className={classes.cardGrid} >
      <Grid container spacing={3}>
        {links_array.map((link, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {link.name}
                </Typography>
                <Typography>
                  {link.comment}
                </Typography>
                <Typography>
                  <a href={link.link_url}>{link.link_url}</a>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  copy
                </Button>
                <Button size="small" color="primary">
                  go
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

  );
}

