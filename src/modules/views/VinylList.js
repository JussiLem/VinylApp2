import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import imageDots from "../../static/pics/productCTAImageDots.png";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: "flex"
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(8, 3)
  },
  cardContent: {
    maxWidth: 100
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  button: {
    width: "100%"
  },
  imagesWrapper: {
    position: "relative"
  },
  imageDots: {
    position: "absolute",
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: "100%",
    background: `url(${imageDots})`
  },
  image: {
    position: "absolute",
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600
  }
});

function VinylList(props) {
  const { classes } = props;
  return (
    <Container className={classes.root} component="section">
      <Grid container>
        {props.vinyls.map(vinyl => {
          return (
            <Grid item key={vinyl.id}>
              <div className={classes.card}>
                <CardContent>
                  <Typography variant="h5">{vinyl.artist}</Typography>
                  <Typography>{vinyl.title}</Typography>
                  <Typography>{vinyl.genre}</Typography>
                  {vinyl.thumbnail ? (
                    <CardMedia
                      style={{ height: 200, width: 200 }}
                      // image={url + '/uploads/' + vinyl.thumbnail}
                      title={vinyl.title}
                    />
                  ) : (
                    <Typography style={{ height: 100, width: 75 }}>
                      Ei kuvaa
                    </Typography>
                  )}

                  {/*<IconButton  style={{marginLeft: 35, marginRight: 35}} component={ Link }*/}
                  {/*             to={'/nayta/' + vinyl.id + '/' + vinyl.artist + '/' + vinyl.title + '/' + vinyl.genre  }>*/}
                  {/*</IconButton>*/}
                </CardContent>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

VinylList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VinylList);
