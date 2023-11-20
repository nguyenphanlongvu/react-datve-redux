import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import { datVe } from "./data";
import { LUA_CHON } from "./redux/constant/actions";
import { connect } from "react-redux";
class ItemChair extends Component {
  renderGheNumbers() {
    const gheNumbers = datVe
      .find((item) => item.hang)
      .danhSachGhe.map((ghe) => (
        <div className="col-1" key={ghe.soGhe}>
          <div
            className="ghe text-center "
            onClick={() => this.props.handleClickChair(ghe)}
          >
            {ghe.soGhe}
          </div>
        </div>
      ));

    return gheNumbers || null;
  }

  render() {
    let { data } = this.props;
    return (
      <div>
        <div className="text-white row">
          <div className="col-1 text-center" style={{ fontSize: "30px" }}>
            {data.hang}
          </div>
          <h2 className="row">{this.renderGheNumbers(data.hang)}</h2>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleClickChair: (ghe) => {
      let action = {
        type: LUA_CHON,
        payload: ghe,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemChair);
