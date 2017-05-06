import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */

const video_style = {
  width: '90%',
  minHeight: 400
};

export default class ModalBox extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleNewAuction = () => {
      window.createButtonClickHandler();
  };

  render() {
    const actions = [
      <FlatButton
        label="Close feed."
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Bid" onClick={this.handleOpen} />
        <Dialog
          title="Current Bid: 400"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <video id="videoEl" autoPlay={true} style={video_style}></video>
        </Dialog>
      </div>
    );
  }
}