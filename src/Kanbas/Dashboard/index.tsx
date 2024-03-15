import { useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../Database';
import { PiNotePencil } from 'react-icons/pi';
import './index.css';
import { Course } from '../../types';

function Dashboard() {
  const [courses, setCourses] = useState<Course[]>(db.courses);

  const [course, setCourse] = useState<Course>({
    _id: '0',
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    image: 'reactjs.webp'
  });

  const addNewCourse = () => {
    const totalNoOfCourses = courses.length;
    const commonText = `2042${(totalNoOfCourses + 1) * 10}`;
    const cardText = `${course.number}_12631_${commonText}`;
    const newCourse: Course = {
      ...course,
      _id: new Date().getTime().toString(),
      cardText,
      cardSubText: `${commonText}_1 Fall Semester Full Term`
    };

    setCourses(prevCourses => [...prevCourses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter(course => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map(c => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <input
        value={course.name}
        className="form-control"
        onChange={e => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={e => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={e => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={e => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className="btn btn-primary" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse}>
        Update
      </button>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {!!courses.length ? (
            courses.map(course => (
              <div key={course._id} className="col" style={{ width: 300 }}>
                <div className="card">
                  <div className="d-inline-block position-absolute position-ellipsis fs-24 text-light">
                    <i className="fa fa-ellipsis-v" />
                  </div>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                    <img
                      src={`/images/${course.image}`}
                      className="card-img-top"
                      style={{ height: 150 }}
                      alt={course.name + ' image'}
                    />
                  </Link>
                  <div className="card-body">
                    <Link
                      className="link-primary link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-bold fs-14"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      {course.name}
                      <p className="card-text fs-15 link-dark">
                        {course.cardText}
                        <br />
                        <span className="fs-12">{course.cardSubText}</span>
                      </p>
                    </Link>
                    <div>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <Link
                      className="text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      <PiNotePencil fontSize="1.5em" className="mt-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="fs-4">No published courses :(</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
