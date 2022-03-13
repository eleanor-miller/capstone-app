import React from "react";
import logo from "/src/logo.svg";

function Header(this: any) {
  return (
    <div className="Header">
      <img src={logo} height={65} width={65} />
      &nbsp;
      <h3>
        Hi, {this.props.currentUser ? this.props.currentUser.username : ""}
      </h3>
    </div>
  );
}

export default Header;
