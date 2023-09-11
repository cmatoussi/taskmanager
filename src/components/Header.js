import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { IoMdFlame} from "react-icons/io";


const Header = ({strike}) => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }
  return (
      <div className="page-header">
      <nav className="navigation">
      <h2 className="webname">Task Manager</h2>
        <Link
          className={`link ${activeLink === 'manage' ? 'active' : ''}`}
          onClick={() => handleLinkClick('manage')}
          to="/manage"
        >
          Manage
        </Link>
        <Link
          className={`link ${activeLink === 'today' ? 'active' : ''}`}
          onClick={() => handleLinkClick('today')}
          to="/today"
        >
          Today
        </Link>
        <Link
          className={`link ${activeLink === 'active' ? 'active' : ''}`}
          onClick={() => handleLinkClick('active')}
          to="/active"
        >
          Active
        </Link>
        <Link
          className={`link ${activeLink === 'completed' ? 'active' : ''}`}
          onClick={() => handleLinkClick('completed')}
          to="/completed"
        >
          Completed
        </Link>
        <div style={{marginLeft: '5%'}}>{strike}</div>
        <IoMdFlame size="30px" color="red"/> 
      </nav>
    </div>
  );
};

export default Header;






