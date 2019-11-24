import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core";
import VinylList from "./VinylList";
import Snackbar from "../components/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import clsx from "clsx";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import * as axios from "axios";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: "flex"
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3)
  },
  error: {
    backgroundColor: theme.palette.error.xLight
  },
  cardContent: {
    maxWidth: 400
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  close: {
    padding: theme.spacing(0.5)
  }
});

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: theme.palette.success.xLight
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: theme.palette.warning.main
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

function GetVinyls(props) {
  const classesStyles = useStyles2();
  const [artists, setArtists] = React.useState([]);
  const [error, setError] = React.useState("Loading");
  const url = "http://localhost:8080/vinyl/all";

  useEffect(() => {
    const getAllVinyls = async () => {
      try {
        const response = await axios(url);
        setArtists(response.data);
        setError("");
      } catch (error) {
        setArtists([]);
        setError(`Loading data failed: ${error}`);
      }
    };
    getAllVinyls();
  }, [props.artist]);

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (error.length > 0) {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          variant={"error"}
          className={classesStyles.margin}
          onClose={handleClose}
          message={`${error} 😱`}
        />
      </Snackbar>
    );
  }

  if (artists.length > 0) {
    return <VinylList vinyls={artists} />;
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant="warning"
        className={classesStyles.margin}
        message="No artists were found!"
      />
    </Snackbar>
  );
}

GetVinyls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetVinyls);
