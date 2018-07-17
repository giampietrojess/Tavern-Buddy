import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: 'white'}} position="static">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          
          </IconButton> */}
          <Typography variant="title" color="inherit" className={classes.flex}>
            Tavern Buddy
          </Typography>
          <Button color="inherit">Login</Button>
          <a href="/">Home</a>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);





// export default class NavBar extends Component {
//     render() {
//         return (
//             <div>
                
//                     
            
//             </div>
//         );
//     }
// }

// if (document.getElementById('example')) {
//     ReactDOM.render(<NavBar />, document.getElementById('example'));
// }
