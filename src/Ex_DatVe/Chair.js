import React, { Component } from "react";
import { connect } from "react-redux";
import ItemChair from "./ItemChair";

class Chair extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => {
          return <ItemChair key={index} data={item} />;
        })}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.datVeReducer.datVe,
  };
};

export default connect(mapStateToProps)(Chair);
