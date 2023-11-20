import React, { Component } from "react";
import "./style.css";
import bgMovie from "./bgmovie.jpg";
import HangGhe from "./HangGhe";
import SoDoGhe from "./SoDoGhe";
import ThongTinDatVe from "./ThongTinDatVe";
import { connect } from "react-redux";

class DatVe extends Component {
  tinhTongTien = () => {
    let sum = 0;
    for (let i = 0; i < this.props.danhSachGheDuocChon.length; i++) {
      let ghe = this.props.danhSachGheDuocChon[i];
      sum += ghe.gia;
    }
    return sum.toLocaleString();
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          backgroundImage: `url(${bgMovie})`,
          width: "100vw",
          minHeight: "100vh",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: " rgba(0, 0, 0, 0.7)",
            width: "100%",
            minHeight: "100vh",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row ">
              <div className="col-8 mt-2">
                <div
                  style={{ fontSize: 30 }}
                  className="text-center text-warning "
                >
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="text-center text-white ">Màn hình</div>
                <div className="screen ml-4"></div>
                <div style={{ marginLeft: 120 }}>
                  <HangGhe />
                </div>
                <div className="row container">
                  <div className="col-1">
                    {this.props.danhSachGhe.map((item, index) => {
                      return (
                        <div
                          className="text-warning text-right"
                          style={{ marginBottom: 21 }}
                        >
                          {item.hang}
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-11 mt-3">
                    <SoDoGhe />
                  </div>
                </div>
              </div>

              {/* Thông tin vé đang chọn */}
              <div className="col-4 mt-3">
                <div
                  style={{ fontSize: 35 }}
                  className="text-center text-white mb-3"
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>

                <div className="d-flex mb-1">
                  <button className="gheDuocChon ml-0"></button>
                  <div className="text-white ml-2">Ghế đã đặt</div>
                </div>
                <div className="d-flex mb-2">
                  <button className="gheDangChon ml-0"></button>
                  <div className="text-white ml-2">Ghế đang chọn</div>
                </div>
                <div className="d-flex">
                  <button className="ghe ml-0"></button>
                  <div className="text-white ml-2">Ghế chưa đặt</div>
                </div>
                <table className="table table-bordered mt-3 text-white text-center table ">
                  <thead>
                    <tr className="text-white ">
                      <th>Số ghế</th>
                      <th>Giá</th>
                      <th>Hủy</th>
                    </tr>
                  </thead>
                  <ThongTinDatVe />
                  <tr className="text-warning">
                    <td colSpan="1" className="text-white">
                      Tổng tiền :
                    </td>
                    <td>{this.tinhTongTien()}đ</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.DatVeReducer.danhSachGhe,
    danhSachGheDuocChon: state.DatVeReducer.danhSachGheDuocChon,
  };
};

export default connect(mapStateToProps)(DatVe);
