import { Navigate, Route, Routes, useParams } from 'react-router';
import { HiMiniBars3 } from 'react-icons/hi2';
import { PiEyeglasses } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import CourseNavigation from './Navigation';
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import { courses } from '../Database';
import './index.css';
import AssignmentEditor from './Assignments/Editor';
import Grades from './Grades';

function Courses() {
  const { courseId } = useParams();
  const course = courses.find(course => course._id === courseId);

  const href = window.location.href;
  const splitHref = href.split('/');

  const breadcrumbText =
    splitHref.at(-1) === 'Home'
      ? ['Modules']
      : splitHref.at(-2) === 'Assignments'
      ? [splitHref.at(-2), splitHref.at(-1)]
      : [splitHref.at(-1)];

  return (
    <>
      <div className="d-none d-md-block mx-3 p-2">
        <div className="d-flex align-items-center custom-breadcrumb">
          <HiMiniBars3 color="#DC4C64" cursor="pointer" fontSize="1.5em" />
          <ol
            className="breadcrumb align-self-center pt-3"
            style={{ fontSize: 20 }}
          >
            <li className="breadcrumb-item">
              <Link to="#" className="link-danger">
                {course?.name}
              </Link>
            </li>
            {breadcrumbText.map(text => (
              <li key={text} className="breadcrumb-item">
                {text}
              </li>
            ))}
          </ol>
          <button className="btn btn-light ms-auto">
            <PiEyeglasses />
            Student View
          </button>
        </div>
      </div>
      <CourseNavigation />
      <div>
        <div
          className="position-fixed bottom-0 end-0 overflow-y-scroll"
          style={{ left: 320, top: 50 }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;
