import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
    render() {
      return (
        <div style={{marginLeft:25, marginTop:10}}>
          {this.props.hangGhe.danhSachGhe.map((item, index) => (
            <div
              key={index} // Use index as key, but ideally, use a unique identifier from your data
              className="text-warning"
              style={{
                display: "inline-flex",
                flexDirection: "row",

                marginRight: 55,
              }}
            >
              {item.soGhe}
            </div>
          ))}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        hangGhe: state.DatVeReducer && state.DatVeReducer.thuTuGhe
    }
}


export default connect(mapStateToProps)(HangGhe)
