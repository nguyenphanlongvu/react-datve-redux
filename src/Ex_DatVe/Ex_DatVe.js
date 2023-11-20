import React, { Component } from "react";
import Chair from "./Chair";
import KetQua from "./KetQua";
import Name from "./Name";
import "./style.css";
import backGround from "./bgmovie.jpg";

export default class Ex_DatVe extends Component {
  render() {
    return (
      <div
        className="bg-container"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <div className="container source_container">
          <Chair />
          <Name />
          <KetQua />
        </div>
      </div>
    );
  }
}
