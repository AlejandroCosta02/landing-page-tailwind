import React from "react";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      
      <div>
        <div className="grid grid-flow-col gap-4">
          <IconContext.Provider value={{ size: "4em" }}>
            <a className="cursor-pointer">
              <BsGithub />
            </a>
          </IconContext.Provider>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Alejandro C.</p>
      </div>
    </footer>
  );
}

export default Footer;
