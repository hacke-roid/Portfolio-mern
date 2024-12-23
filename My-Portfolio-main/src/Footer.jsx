import React from "react";

const Footer = () => {

    const handleClickCloseTab = () => {
      window.close();
    };

  return (
    <div className="footer-style">
      <span style={{fontFamily: "cursive"}}>
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect. 
        <br />
        <a href="mailto:ramakrishna.urankar@gmail.com">Email Me</a>
      </span>
      <div className="signing-off" onClick={handleClickCloseTab}>
        Ramakrishna Signing off
      </div>
    </div>
  );
};

export default Footer;
