import React from "react";
import { Link } from "react-scroll";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Modal from "./Modal";
function Header(props) {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='about-me' spy={true} smooth={true} offset={-10} duration={500}>About ME</Link></li>
        <li tabIndex={0}>
          <Link to='project' spy={true} smooth={true} offset={20} duration={500} className="justify-between">
            Projects
          </Link>
          
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Alee</a>
    <BsFillPatchCheckFill />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About Me</a></li>
      <li tabIndex={0}>
        <a>
          Projects
        </a>
        
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end  lg:flex">
    <Modal />
  </div>
  
</div>
  );
}

export default Header;
