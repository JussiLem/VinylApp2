import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

function Artist(props) {
  const { classes } = props;
  let { id } = useParams();
  let { artist } = useParams();
  let { title } = useParams();
  let { genre } = useParams();
  const today = new Date();
  // tai  let { id, artist, title, genre } = useParams();

  const removeArtist = () => {
    const fetchData = async () => {
      await axios(`http://localhost:8080/vinyl/delete/${id}`);
    };
    fetchData();
  };

  return (
    <Container className={classes.root} component="section">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar>
              <PersonIcon />
            </Avatar>
          }
          title={artist}
          subheader={today.getFullYear()}
        />
        <CardContent>
          {/*<Typography>Id: { id }</Typography>*/}
          <Typography variant="body2" color="textPrimary" component="p">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {genre}
          </Typography>
          <Fab color="primary" aria-label="edit">
            <EditIcon component={Link} to={`/vinylapp/edit/${id}/${artist}`} />

            {/*<Button onClick={removeArtist}>Edit</Button>*/}
          </Fab>

          <Fab color="secondary" aria-label="delete">
            <Button onClick={removeArtist}>Delete</Button>
          </Fab>
          <Link to="/">
            <Typography>Close</Typography>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}

Artist.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Artist);
