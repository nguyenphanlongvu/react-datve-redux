import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeats: [],
    };
  }

  handleAddToCart = () => {
    const { info } = this.props;

    // Lấy danh sách ghế đã chọn từ state
    const selectedSeatsInState = this.state.selectedSeats.map(
      (seat) => seat.soGhe
    );

    // Kiểm tra xem thông tin ghế đã chọn có trong danh sách hay không
    const newSelectedSeats = info.filter(
      (seat) => !selectedSeatsInState.includes(seat.soGhe)
    );

    // Thêm danh sách ghế đã chọn vào state
    this.setState((prevState) => ({
      selectedSeats: [...prevState.selectedSeats, ...newSelectedSeats],
    }));
  };

  // Kiểm tra xem ghế đã chọn có trong danh sách hay không
  isSeatSelected = (seatNumber) => {
    return this.state.selectedSeats.some((seat) => seat.soGhe === seatNumber);
  };
  render() {
    return (
      <div className="text-white background_info text-center">
        <h1>LỰA CHỌN CỦA BẠN</h1>
        <button
          className="btn btn-success text-center m-2"
          onClick={this.handleAddToCart}
        >
          Xác nhận
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number Chair</th>
              <th>Price</th>
              <th>Loading</th>
            </tr>
          </thead>
          <tbody className="" style={{ fontSize: "20px" }}>
            {this.state.selectedSeats.map((item, index) => (
              <tr key={index}>
                <td>Name</td>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td>{item.daDat}</td>
                {/* Thêm các cột khác nếu cần */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  console.log(state.datVeReducer.infor);
  return {
    info: state.datVeReducer.infor,
    name: state.datVeReducer.name,
  };
};
export default connect(mapStateToProps)(KetQua);
