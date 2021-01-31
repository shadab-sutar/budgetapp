import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Card style={{ width: '50%', float: 'left', margin: '1px', background: '#f2445b', textAlign: 'center' }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Current Expenditure
        </Typography>
          <Typography variant="h5" component="h2">
            &#8377; 2,000
        </Typography>
        </CardContent>
      </Card>
      <Card style={{ width: '50%', float: 'left', margin: '1px', background: '#bcf078', textAlign: 'center' }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Remaining Balance
        </Typography>
          <Typography variant="h5" component="h2">
            &#8377; 2,000
        </Typography>
        </CardContent>
      </Card>

      <AppBar position="fixed" color="primary" style={{ bottom: '0', top: 'auto', height: '50px' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
