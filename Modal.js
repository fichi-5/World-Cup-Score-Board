import React from "react";
export default class Modal extends React.Component {

onClose = e => {
  this.props.show_modal_add_match = false;
  this.props.show_modal_finish_match = false;
};

render() {
  if(!this.props.show_modal){
    return null;
  }

  return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}