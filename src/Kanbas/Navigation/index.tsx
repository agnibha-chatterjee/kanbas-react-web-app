import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaYoutube,
  FaSignOutAlt,
  FaQuestionCircle
} from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import './index.css';

function KanbasNavigation() {
  const links = [
    {
      label: 'Account',
      icon: <MdAccountCircle className="fs-2" />
    },
    {
      label: 'Dashboard',
      icon: <FaTachometerAlt className="fs-2 text-danger" />
    },
    { label: 'Courses', icon: <FaBook className="fs-2 text-danger" /> },
    {
      label: 'Calendar',
      icon: <FaRegCalendarAlt className="fs-2 text-danger" />
    },
    { label: 'Inbox', icon: <FaInbox className="fs-2 text-danger" /> },
    { label: 'History', icon: <FaHistory className="fs-2 text-danger" /> },
    { label: 'Studio', icon: <FaYoutube className="fs-2 text-danger" /> },
    { label: 'Commons', icon: <FaSignOutAlt className="fs-2 text-danger" /> },
    { label: 'Help', icon: <FaQuestionCircle className="fs-2 text-danger" /> }
  ];

  const { pathname } = useLocation();

  return (
    <div className="d-none d-md-block">
      <ul className="wd-kanbas-navigation">
        <li>
          <Link to="https://www.northeastern.edu" target="_blank">
            <img
              width={70}
              src="/images/neu-logo.png"
              alt="Northeastern University"
            />
          </Link>
        </li>
        {links.map((link, index) => (
          <li
            key={link.label + index}
            className={pathname.includes(link.label) ? 'wd-active' : ''}
          >
            <Link to={`/Kanbas/${link.label}`}>
              {link.icon} {link.label}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;
