import { Link, useLocation, useParams } from 'react-router-dom';
import './index.css';
import { courses } from '../../Database';

function CourseNavigation() {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
    'Panopto Video',
    'Discussions',
    'Announcements',
    'Pages',
    'Files',
    'Rubrics',
    'Outcomes',
    'Collaborations',
    'Syllabus',
    'Settings'
  ];

  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find(course => course._id === courseId);

  return (
    <div className="d-none d-md-block me-4">
      <div className="my-3" style={{ fontSize: 11, marginLeft: 37.5 }}>
        <em>{course?.cardSubText.slice(0, 27)}...</em>
      </div>
      <ul className="wd-navigation">
        {links.map(link => (
          <li key={link} className={pathname.includes(link) ? 'wd-active' : ''}>
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;
