import React, { useState } from "react";
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";  
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils} from '@fortawesome/free-solid-svg-icons';
import  Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "meals", href: "#meals" },
  { name: "snacks", href: "#snacks" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    fontFamily: "Quicksand",
  },
  title: {
    marginRight: "auto",
    fontFamily: "Quicksand",
  },
  icon: {
    marginRight: "auto",
  }
}));

const Header = () => {
  const classes = useStyles();  
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
      <Toolbar disableGutters>
      <FontAwesomeIcon className={classes.icon} icon={faUtensils} size="2x" />
      <h2 className={classes.title}>kaylin's recipes</h2>
      <Hidden xsDown>
        {navLinks.map((item) => (
          <Link 
            className={classes.link}
            color= "textPrimary"
            variant= "button"  
            to={item.href}
            key={item.name}  
          >
            {item.name}
          </Link>
        ))}
      </Hidden>
      <Hidden smUp>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon/>
          </IconButton>
      </Hidden>
      </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                className={classes.link}
                color="textPrimary"
                variant="button"
                underline="none"
                to={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}

export default Header;
