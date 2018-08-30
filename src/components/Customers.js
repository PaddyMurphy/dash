import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

export default class Customers extends Component {
  render() {
    return (
      <div className="customers">
        <Typography style={{marginTop: '60px'}} variant="display1" gutterBottom>
          Customers
        </Typography>
      </div>
    );
  }
}
