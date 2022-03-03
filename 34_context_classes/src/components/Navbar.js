import {
  AppBar,
  Toolbar,
  Switch,
  InputBase,
  Typography,
  withStyles,
  IconButton,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Component } from "react";
import "flag-icons/css/flag-icons.css";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";

import styles from "./styles/NavbarStyles";

const content = {
  english: {
    search: "Search",
    flag: "gb",
  },
  french: {
    search: "Chercher",
    flag: "fr",
  },
  spanish: {
    search: "Buscar",
    flag: "es",
  },
};
class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];

    return (
      <nav className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span className={`fi fi-${flag}`}></span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch checked={isDarkMode} onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
