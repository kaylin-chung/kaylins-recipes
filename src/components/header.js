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
import "@fontsource/montserrat"

const navLinks = [
  {name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "meals", href: "/meals" },
  { name: "snacks", href: "/snacks" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    fontFamily: "montserrat",
  },
  title: {
    marginRight: "auto",
    fontFamily: "montserrat",
  },
  icon: {
    marginRight: "auto",
  }
}));

const Header = () => {
  const classes = useStyles();  
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" style={{ background: '#FE587F' }}>
      <Container maxWidth="md">
      <Toolbar disableGutters>
      <FontAwesomeIcon icon={faUtensils} className={classes.icon} size="2x" />
      <h2 className={classes.title}>KAYLIN'S RECIPES</h2>
      <Hidden xsDown>
        {navLinks.map((item) => (
          <Link 
            className={classes.link}
            style={{ color: 'white', fontWeight: "bold" }}
            variant="button"
            href={item.href}
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
                style={{ color: 'white' }}
                variant="button"
                underline="none"
                href={item.href}
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
