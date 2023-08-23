import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
      </nav>
    </div>
  );
};

export default Header;






