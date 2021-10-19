import React, { Component } from "react";
import Home from '../../components/Home/Home'
import CommentsMain from "../../components/CommentsMain/CommentsMain"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
  constructor() {
    super();
  }
  render() {
    let {users} = this.props;
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/comments" component={CommentsMain} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, {})(Navigation);
