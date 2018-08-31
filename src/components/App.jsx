import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { exampleAction } from '../actions/example';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1>My React App!</h1>
            <div className="counter">
              <p>Counter: {this.props.exampleProp}</p>
              <Button
                color="default"
                onClick={() => this.props.exampleAction(-1)}
              >
                -1
              </Button>
              <Button
                color="default"
                onClick={() => this.props.exampleAction(+1)}
              >
                +1
              </Button>
            </div>
            <Link to="/hello">Hello</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ exampleReducer }) => {
  return { exampleProp: exampleReducer.exampleProp };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ exampleAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
