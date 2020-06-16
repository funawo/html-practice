import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

// Page
import PracticeDiffBlockAndInline from './PracticeDiffBlockAndInline';

const useStyle = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  list: {
    width: 250
  },
  anchor: {
    color: '#000000',
    textDecoration: 'none'
  }
}));

const Router = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={() => { setOpen(true) }}>
            <Menu />
          </IconButton>
          <Typography>HTML練習</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className={classes.list} onClick={() => setOpen(false)}>
          <Link to="/practice-1" className={classes.anchor}>
            <List>
              <ListItem button key={'practice-1'}>
                <ListItemText primary={'ブロックレベルとインライン要素'} />
              </ListItem>
            </List>
          </Link>
        </div>
      </Drawer>
      <Switch>
        <Route exact path="/" render={() => (<div>fuanwo</div>)} />
        <Route exact path="/practice-1" component={PracticeDiffBlockAndInline} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
