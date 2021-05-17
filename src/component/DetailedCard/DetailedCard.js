import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "auto",
  },
  media: {
    height: 400,
    margin: 10,
    float: "left",
    width: 300,
    borderRadius: 10,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "purple",
  },
  span: {
    fontWeight: "bold",
  },
  trailer: {
    backgroundColor: "blue",
    color: "white",
  },
  bottomMenu: {
    marginTop: 50,
  },
}));

export default function DetailedCard({ movieDetails, posterImg, backdropImg }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("movieeee", movieDetails);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="rating" className={classes.avatar}>
            {movieDetails.vote_average}
          </Avatar>
        }
        action={
          <Button
            variant="contained"
            color="primary"
            className={classes.trailer}
          >
            WATCH TRAILER
          </Button>
        }
        title={movieDetails?.original_title}
        subheader={movieDetails?.release_date}
      />
      <CardMedia
        component="img"
        className={classes.media}
        image={movieDetails ? posterImg : null}
        title={movieDetails?.original_title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className={classes.span}>Summary : </span>{" "}
          {movieDetails?.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.bottomMenu}>
          <Typography paragraph>
            <span className={classes.span}>Extra Informations : </span>
          </Typography>
          <CardMedia
            className={classes.media}
            image={movieDetails ? backdropImg : null}
            title={movieDetails?.title}
          />
          <Typography paragraph>
            <span className={classes.span}>Tags : </span>{" "}
            {movieDetails?.tagline}
          </Typography>
          <Typography paragraph>
            <span className={classes.span}>Categories : </span>
          </Typography>
          <Typography paragraph>
            <span className={classes.span}>Producers : </span>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
