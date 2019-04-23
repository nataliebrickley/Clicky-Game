import React from "react"

class Modal extends React.Component {

  render() {

    if (!this.props.showModal) {
      return null;
    }
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '70px auto',
      padding: 30
    };
    const buttonStyle = {
      backgroundColor: "red",
      float: "right"
    }
    return (
      <div style={backdropStyle}>
        <div className="text-center" style={modalStyle}>
          <button className="btn" onClick={this.props.onClose} style={buttonStyle}>X</button>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal