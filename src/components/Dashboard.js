import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from 'components/SimpleLineChart';
import SimpleTable from 'components/SimpleTable';
import * as actions from 'actions/Actions.js';
import {styles} from 'styles/AppStyles';

export class Dashboard extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div className="dashboard" style={{marginTop: '60px'}}>
        <Typography variant="display1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="headline" gutterBottom>
          Conversion
        </Typography>

        <Typography component="div" className={styles.chartContainer}>
          <SimpleLineChart />
          <Button onClick={this.simpleAction}>Test redux action</Button>
        </Typography>

        <Typography variant="headline" gutterBottom>
          Deals
        </Typography>

        <div className={styles.tableContainer}>
          <SimpleTable />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...actions,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
