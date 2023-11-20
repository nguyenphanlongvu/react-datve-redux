import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction, datLaiGheAction } from "../redux/actions";

class SoDoGhe extends Component {
  renderGhe = () => {
    return this.props.soDoGhe.map((danhsachghe) =>
      danhsachghe.danhSachGhe.map((item) => {
        switch (item.daDat) {
          case true:
            {
              return <button className="gheDuocChon">{item.soGhe}</button>;
            }
            break;
          case false:
            {
              return (
                <button
                  onClick={() => {
                    this.props.datGhe(item);
                  }}
                  className="ghe"
                >
                  {item.soGhe}
                </button>
              );
            }
            break;
          default:
            return (
              <button
                onClick={() => {
                  this.props.datLaiGhe(item);
                }}
                className="gheDangChon"
              >
                {item.soGhe}
              </button>
            );
        }
      })
    );
  };
  render() {
    return <div>{this.renderGhe()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDuocChon: state.DatVeReducer,
    soDoGhe: state.DatVeReducer.soDoGhe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
    datLaiGhe: (ghe) => {
      dispatch(datLaiGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SoDoGhe);
