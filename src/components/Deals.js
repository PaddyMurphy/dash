import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from 'components/SimpleLineChart';
import SimpleTable from 'components/SimpleTable';

export default class Deals extends Component {
  render() {
    return (
      <div className="deals">
        <Typography style={{marginTop: '60px'}} variant="display1" gutterBottom>
          Deals
        </Typography>
      </div>
    );
  }
}
