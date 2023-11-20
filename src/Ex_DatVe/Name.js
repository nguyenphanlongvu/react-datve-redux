import React, { Component } from "react";
// import { connect } from "react-redux";

export default class Name extends Component {
  state = {
    name: [],
  };
  handleClickName = () => {
    const newName = this.state.name;
    const updatedName = [...newName, this.state.name];
    console.log("😃 - file: Name.js:11 - Name - name:", this.state.name);
    console.log();

    this.setState({
      name: updatedName,
    });
  };

  render() {
    return (
      <div className="text-white">
        <h1 className="text-center">ĐẶT VÉ XEM PHIM</h1>
        <div className="row ">
          <div className="form-group col-4" style={{ width: "50%" }}>
            <label className="text-white mt-5">Tên khách hàng </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
              // aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="col-4 mb-3 d-flex align-items-end">
            <button onClick={this.handleClickName} className="btn btn-danger ">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    );
  }
}
