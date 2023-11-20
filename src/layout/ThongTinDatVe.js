import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions";

class ThongTinDatVe extends Component {
  render() {
    return (
      <tbody>
        {this.props.danhSachGheDuocChon.map((item) => {
          return (
            <tr className="text-warning">
              <td
                style={{
                  verticalAlign: "middle", 
                  borderTop: "1px solid #dee2e6",
                }}
              >
                {item.soGhe}
              </td>
              <td
                style={{
                  verticalAlign: "middle", 
                  borderTop: "1px solid #dee2e6",
                }}
              >
                {item.gia.toLocaleString()}
              </td>

              <td style={{ verticalAlign: "top" }}>
                <button
                  onClick={() => {
                    this.props.huyGhe(item);
                  }}
                  className="btn btn-danger"
                  style={{
                    color: "red",
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDuocChon: state.DatVeReducer.danhSachGheDuocChon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (ghe) => {
      dispatch(huyGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe);
